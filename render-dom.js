const Mustache = require('mustache')
const { Remarkable } = require('remarkable');
const md = new Remarkable({ html: true, xhtmlOut: true, breaks: true });
const { selectDom } = require('./select-dom.js')
const settings = require('./settings.json')[0]
const TRIM_ENTITIES = /<\/?\s*p\s*>|[\s\n\r]+|<\s*br\s*\/?\s*>/ig

function safeName(name) {
  return name.replace(/[^a-z0-9\-]/ig, '-').substr(0, 40);
}

async function collectRoutes() {

  let linksObjs = selectDom(['//a[@href]'], body);
  let links = linksObjs.map(l => decodeURIComponent(l.getAttribute('href')));

  // TODO: convert images and add timestamps, add svg
  let imgObjs = selectDom(['//img[@src]'], body);
  let imgs = imgObjs.map(l => decodeURIComponent(l.getAttribute('src')));
  imgObjs.forEach(img => {
    let src = decodeURIComponent(img.getAttribute('src'))
      .replace(/(-final)*\.[^\.]*$/ig, '-final.jpg')
    img.setAttribute('src', src)
  })

  // TODO: scan for urls and inline
  let stylesObjs = selectDom(['//link[@href]'], body);
  let styles = stylesObjs.map(l => l.getAttribute('href'));

  // TODO: add timestamps and inline
  let scriptsObjs = selectDom(['//script[@src]'], body);
  let scripts = scriptsObjs.map(l => l.getAttribute('src'));

  // TODO: add CSS imports
  let backgrounds = importer.regexToArray(/url\(['"]?(.*?)['"]?\)/ig, page, 1);

  // TODO: check referer page for links to current page, 
  //   interesting concept building router from previous page like an infinite tree

}

async function renderDom(template, request, properties) {

  let key = request.split('/')[0]
  let html = template.rows.flat(1).join('\n')

  console.log(properties)

  Mustache.parse(html)
  // use properties for view and for partials
  html = Mustache.render(html, properties, properties)

  // get all images and urls from template
  let body = selectDom('*', html);

  // replace all leaf Text nodes with markdown
  let textObjs = selectDom([`//*[not(self::STYLE) and contains(., /text())]`], body);
  textObjs.forEach((parent, i) => {
    parent.childNodes.forEach(string => {
      if (string.nodeType !== 3) return;
      let mdHtml = md.render(string.textContent);
      // if all markdown did was insert a paragraph and line break, use value instead
      if (mdHtml.replace(TRIM_ENTITIES, '').trim()
        != string.textContent.replace(TRIM_ENTITIES, '').trim()) {
        string.replaceWith.apply(string, selectDom(['//BODY/*'], `<html><body>${mdHtml}</body></html>`));
      }
    })
  })

  // add IDs to h1, h2, h3, etc elements that match their text contents
  let headingsObjs = selectDom(['(//h1|//h2|//h3|//h4)[not(@id) and not(./ancestor::nav)]'], body);
  headingsObjs.forEach(h => h.setAttribute('id', safeName(h.textContent)));

  let paragraphs = selectDom(['//p'], body)
  paragraphs.forEach(p => {
    p.setAttribute('class', selectDom(['.//*'], p)
      .map(e => e.tagName).join(' '))
    let img = selectDom(['.//img'], p)[0]
    let id = 'id' + safeName(p.textContent || img.src)
    p.setAttribute('id', id)
    if (img) {
      let style = img.ownerDocument.createElement('style')
      let src = decodeURIComponent(img.getAttribute('src'))
        .replace(/(-final)*\.[^\.]*$/ig, '')
      style.appendChild(img.ownerDocument.createTextNode(`
#${id}:before {background-image: url("${src}-final.jpg");}`));
      p.parentNode.insertBefore(style, p)
    }
  })

  html = body.ownerDocument.documentElement.outerHTML
  let classNames = request.replace(/\//ig, ' ')
    + ' ' + (key !== request.split('/')[0] ? key : '')
    + ' ' + (properties['class'] || '')

  let domain = ''
  if (typeof properties['domain'] != 'undefined') {
    domain = properties['domain'].includes(':') ? '{{domain}}' : 'https://{{domain}}'
  }

  // automatically set title if it isn't set manually
  let result
  if (typeof properties['title'] == 'undefined' && (result = (/<h1>(.*)<\/h1>/ig).exec(html))) {
    properties['title'] = result[1]
  }

  return html
}

module.exports = {
  renderDom
}
