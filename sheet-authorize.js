const fs = require('fs')
const path = require('path')
const {GoogleAuth} = require('google-auth-library')
const process = require('process')

// TODO: recognize a polyfill pattern in APIs and move this to polyfills, combine with aspects to apply it
const google = require('googleapis').google
const settings = require('./settings.json')[0]


function getCredentials() {
  const PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
  let credentials
  if(fs.existsSync('./megamind-d3c88-9f50b0aed6f5.json')) {
      credentials = path.resolve('./megamind-d3c88-9f50b0aed6f5.json')
  } else {
      credentials = path.join(PROFILE_PATH, '.credentials/megamind-d3c88-9f50b0aed6f5.json')
  }
  return credentials  
}

const GOOGLE_AUTH_SCOPE = [
  'https://www.googleapis.com/auth/spreadsheets'
]

async function authorizeSheets() {
  const credentials = getCredentials()
  let authenticator = await new GoogleAuth({
    keyFile: credentials,
    scopes: GOOGLE_AUTH_SCOPE
  })
  if (!fs.existsSync(credentials)) {
    throw new Error('Authorization does not exist. Visit: https://console.cloud.google.com/iam-admin/serviceaccounts')
  }
  try {
    let client = await authenticator.getClient(/* options here are always ignored b/c cache */)
    return google.sheets({version: 'v4', auth: client})
  } catch(e) {
    console.log(e)
  }
}

module.exports = {
  authorizeSheets
}