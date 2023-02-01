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
    templates[key].data.rows = await getRows(templates[key].data)
    vars = templates[key].data.variables = matchTemplateVariables(templates[key].data.rows)
  }
  if (templates[key].template && templates[key].template.filename) {
    templates[key].template.rows = fs.readFileSync(templates[key].template.filename, 'utf8').split('\n')
    vars = templates[key].template.variables = matchTemplateVariables(templates[key].template.rows)
  }
  if (templates[key].template && templates[key].template.spreadsheetId) {
    templates[key].template.rows = await getRows(templates[key].template)
    vars = templates[key].template.variables = matchTemplateVariables(templates[key].template.rows)
  }
  return vars
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
  let properties = {
    variables: await getTemplateVariables('index', templates)
  }

  let html, template
  if (templates[key].template) {
    if (key == 'index') {
      properties.variables = properties.variables.concat(await getTemplateVariables(settings.index, templates))
      template = templates[settings.index].template
    } else {
      properties.variables = properties.variables.concat(await getTemplateVariables(key, templates))
      template = templates[key].template
    }
    for (let i = 0; i < properties.variables.length; i++) {
      let subkey = properties.variables[i].replace(/-data$/i, '')
      if(templates[subkey]) {
        let subprops = {
          variables: properties.variables.concat(await getTemplateVariables(subkey, templates))
        }
        console.log(templates[subkey])
        if(templates[subkey].data) {
          properties[subkey + '-data'] = templates[subkey].data.rows
        }
        if(templates[subkey].template) {
          properties[subkey] = selectDom(['//BODY/*'], 
          await renderDom(templates[subkey].template, request, subprops))
          .map(el => el.outerHTML).join('')
        }
      }
    }
    properties.content = selectDom(['//BODY/*'], 
        await renderDom(template, request, properties))
        .map(el => el.outerHTML).join('')
  
    html = await renderDom(templates['index'].template, request, properties)
    fs.writeFileSync(path.join(__dirname, '/docs/', key + '.html'), html)
  } else {
    html = JSON.stringify(templates[key].data.rows, null, 2)
    fs.writeFileSync(path.join(__dirname, '/docs/', key + '.json'), html)
  }
  return html
}

module.exports = {
  renderIndex
}