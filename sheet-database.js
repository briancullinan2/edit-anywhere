const fs = require('fs')
const path = require('path')
const {GoogleAuth} = require('google-auth-library')
const process = require('process')

// TODO: recognize a polyfill pattern in APIs and move this to polyfills, combine with aspects to apply it
const google = require('googleapis').google
const {authorizeSheets} = require('./sheet-authorize.js')


async function getInfo(link) {
  if(!link) {
      throw new Error('You didn\'t specify a spreadsheet to work on.')
  }
  const docId = link.replace(/https:\/\/docs.google.com\/spreadsheets\/d\/|\/edit.*$|\/copy.*$/ig, '')
  const sheets = await authorizeSheets()
  const response = await sheets.spreadsheets.get({
    spreadsheetId: docId
  })
  return Object.assign(response.data, {
    sheets: response.data.sheets.map(s => Object.assign(s, {
        spreadsheetId: response.data.spreadsheetId
    }))
  })
}


async function getRows(link, worksheet) {
  if(typeof link == 'object') {
    worksheet = link
    link = worksheet.spreadsheetId
  }
  const sheets = await authorizeSheets()
  const info = await getInfo(link)
  if(typeof worksheet == 'string') {
    worksheet = info.sheets.filter(s => s.properties.title === worksheet 
                                    || (s.properties.sheetId + '') === worksheet)[0]
  }
  console.log(`Reading Sheet: ${worksheet.properties.title}`
                        + ` - ${worksheet.properties.gridProperties.rowCount}`)
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: worksheet.spreadsheetId,
    range: `'${worksheet.properties.title}'!A1:Z${worksheet.properties.gridProperties.rowCount}`
  })
  if (worksheet.properties.title.toLowerCase().includes('data')) { 
    const rows = response.data.values
    return rows.slice(1).reduce((acc, o, i) =>
            (acc[i] = o.reduce((obj, cell, j) =>
            (obj[rows[0][j]] = cell, obj), {}), acc), [])
  } else {
    return response.data.values || []
  }
}


async function getTemplates(doc) {
  let info = await getInfo(doc)
  console.log(`Loaded Sheet: ${info.properties.title} ${info.spreadsheetId}`)
  return info.sheets.reduce((obj, worksheet) => {
      var layoutTitle = worksheet.properties.title.toLowerCase()
          .replace(/\s*layout|\s*data|\s*template/ig, '')
          .split(/\s+/ig).join('-')

      if( typeof obj[layoutTitle] == 'undefined' ) obj[layoutTitle] = {template: null, data: null}
      if( worksheet.properties.title.toLowerCase().includes('data') ) obj[layoutTitle].data = worksheet
      else obj[layoutTitle].template = worksheet
      return obj
  }, {})
}

module.exports = {
  getTemplates,
  getRows
}
