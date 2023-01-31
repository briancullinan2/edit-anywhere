const express = require('express')
const path = require('path')
const fs = require('fs')
const {getTemplates, getRows} = require('./sheet-database.js')
const {renderIndex} = require('./render-page.js')

const SHEET_URL = '/sheet'

async function loadContent(req, res, next) {
	let pathname = req.originalUrl
	if (pathname == '/' || pathname == '') {
		pathname = '/index.html'
	}
	const filename = path.join(__dirname, '/docs/', pathname)
	if (pathname == '/index.html' && !fs.existsSync(filename)) {
		await renderIndex(pathname)
	}
	if (fs.existsSync(filename)) {
		return res.sendFile(filename)
	}
	return next()
}

async function rawData(req, res) {
	const doc = req.originalUrl.replace(/^\/sheet\//gi, '')
	const segments = req.originalUrl.replace(/^\//, '').split('\/')
	if(segments.length > 2) {
		const page = await getRows(segments[1], segments[2])
		res.setHeader('content-type', 'application/json')
		return res.send(JSON.stringify(page, null, 2))
	} else {
		const sheet = await getTemplates(doc)
		res.setHeader('content-type', 'application/json')
		return res.send(JSON.stringify(sheet, null, 2))
	}
}

function startServer() {
	const app = express()
	app.enable('etag')
	app.set('etag', 'weak')
	app.use(express.json())
	app.use(loadContent)
	app.use(SHEET_URL, rawData)
	//app.use(PDF_URL, getPDF)
	//app.use(SCREENSHOT_URL, getScreenshot)
	//app.put(SAVE_URL, uploadFile)

	// TODO: nuance, none of these options work anymore, everything is broken, npm is infected or too much complexity to keep track of? why do so many tutorials have bad instructions? I must be living in some alternate reality of hell, https://stackoverflow.com/questions/10867052/cannot-serve-static-files-with-express-routing-and-no-trailing-slash

	//app.use(express.static(path.resolve(__dirname, './docs/')))
	//app.all('*', function(req, res) { res.redirect('/main/') })
	//app.use('/', express.static(__dirname+'/docs'))

	const { createServer } = require('http')
	const httpServer = createServer(app).listen(8080)
	
}

module.exports = {
	startServer,
}

