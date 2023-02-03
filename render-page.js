const fs = require('fs')
const path = require('path')
const { getTemplates, getRows } = require('./sheet-database.js')
const settings = require('./settings.json')[0]
const { renderDom } = require('./render-dom.js')
const { selectDom } = require('./select-dom.js')

function regexToArray(ex, str, i = 0) {
  let co = []
  let m
  while ((m = ex.exec(str))) {
    co.push(i === -1 ? [m.index, m[0].length] : i === false ? m : m[i])
  }
  return co
}

function getFileTemplates(scandir, templates) {
  if (scandir[0] = '.') {
    scandir = path.join(path.resolve(__dirname), scandir)
  }
  let files = fs.readdirSync(scandir)
  return files.reduce((obj, file) => {
    // TODO: add more file types?
    if (!file.match(/\.html$|\.json$|\.md$/i)) return obj
    if (file[0] == '.') return obj

    const key = file.toLocaleLowerCase().replace(/\.[a-z0-9]+.*$/i, '')
    if (file[0] == '.') return obj
    if (typeof templates[key] == 'undefined') {
      templates[key] = obj[key] = { template: null, data: null }
    }
    if (typeof obj[key] == 'undefined') {
      obj[key] = templates[key]
    }
    if (file.toLocaleLowerCase().includes('data')
      || file.toLocaleLowerCase().includes('.json')) {
      templates[key].data = obj[key].data = []
    } else {
      templates[key].template = obj[key].template = {
        filename: path.join(scandir, file)
      }
    }
    return obj
  }, {})
}

function matchTemplateVariables(content) {
  return content.flat(1)
    .map(cell => regexToArray(/\{\{\s*[>#\/\{\^]*\s*(.*?)\s*\}\}/ig, cell, 1))
    .flat(1)
}


async function getTemplateVariables(key, templates) {
  let vars = []
  if (templates[key].data && templates[key].data.spreadsheetId) {
    if(!templates[key].data.rows) {
      templates[key].data.rows = await getRows(templates[key].data)
    }
    vars = templates[key].data.variables = matchTemplateVariables(templates[key].data.rows)
  }
  if (templates[key].template && templates[key].template.filename) {
    if(!templates[key].template.rows) {
      templates[key].template.rows = fs.readFileSync(templates[key].template.filename, 'utf8').split('\n')
    }
    vars = templates[key].template.variables = matchTemplateVariables(templates[key].template.rows)
  }
  if (templates[key].template && templates[key].template.spreadsheetId) {
    if(!templates[key].template.rows) {
      templates[key].template.rows = await getRows(templates[key].template)
    }
    vars = templates[key].template.variables = matchTemplateVariables(templates[key].template.rows)
  }
  return vars
}

async function renderPage(key, request, templates, variables) {
  let properties = Object.assign({}, variables, {
    variables: (variables.variables || []).concat(await getTemplateVariables(key, templates))
  })

  if(templates[key].data) {
    variables[key + '-data'] = properties[key + '-data'] = templates[key].data.rows
  }

  for (let i = 0; i < properties.variables.length; i++) {
    let subkey = properties.variables[i].replace(/-data$/i, '')
    if(templates[subkey] && typeof properties[subkey] == 'undefined'
      && (typeof variables[subkey] == 'undefined' || variables[subkey] === false)) {
      properties[subkey] = false
      const template = await renderPage(subkey, request, templates, properties)
      variables[subkey] = properties[subkey] = template[subkey]
      variables[subkey+'-data'] = properties[subkey+'-data'] = template[subkey+'-data']
    }
    if(properties.variables[i].match(/^[:]+/gi)) {
      let listVariable = properties.variables[i].replace(/^[:]+/, '')
      if(typeof properties[listVariable] == 'undefined') {
        properties[listVariable] = []
      }
      if(!Array.isArray(properties[listVariable])) {
        properties[listVariable] = [properties[listVariable]]
      }
      properties[listVariable][properties[listVariable].length] = properties[properties.variables[i]]
    }
  }

  if(templates[key].template) {
    properties[key] = selectDom(['//BODY/*'], 
      await renderDom(templates[key].template, request, properties))
        .map(el => el.outerHTML).join('')
  }

  return properties
}

async function renderIndex(request) {
  if (typeof request == 'object' && request) {
    request = request.originalUrl
  }
  request = request.replace(/^\/|.html$|\/$/gi, '').toLowerCase()
  let key = request.split('/')[0]

  const templates = await getTemplates(settings.database)
  // add html/markdown template files
  const files = getFileTemplates(settings.template, templates)
  // TODO: add github indexing

  if (typeof templates[key] == 'undefined') {
    throw new Error('Template not found: ' + key)
  }
  let properties = Object.assign({
    variables: Object.keys(settings).concat(await getTemplateVariables('index', templates))
  }, settings)

  let html
  if (templates[key].template) {
    if (key == 'index' && settings.index) {
      html = await renderPage(settings.index, request, templates, properties)
      fs.writeFileSync(path.join(__dirname, '/docs/', key + '.html'), html[settings.index])
    } else {
      html = await renderPage(key, request, templates, properties)
      fs.writeFileSync(path.join(__dirname, '/docs/', key + '.html'), html[key])
    }
    // TODO: else if, first in sheet?
  } else {
    html = JSON.stringify(templates[key].data.rows, null, 2)
    fs.writeFileSync(path.join(__dirname, '/docs/', key + '.json'), html)
  }
  return html
}

module.exports = {
  renderIndex
}