var {XPathResult, JSDOM} = require('jsdom')
//var cheerio = require('cheerio')
//var assert = require('assert')
var wgxpath = require('wgxpath')

// returns results from multiple queries added together
function walkTree(select, ctx, evaluate) {
  var result;
  if(Array.isArray(select)) {
      result = select.reduce((arr, query, i) => {
          // pass the previous results to the next statement as the context
          if(i > 0) {
              return arr.map(r => walkTree(query, r, evaluate))
          }
          var result = walkTree(query, ctx, evaluate)
          if(typeof result !== 'undefined') {
              if(Array.isArray(result)) {
                  return arr.concat(result)
              } else {
                  return arr.concat([result])
              }
          }
          return arr
      }, []);
  } else if (typeof select === 'function') {
      // this is just here because it could be
      //   called from the array reduce above
      result = select(ctx); 
  } else if (typeof select === 'object') {
      result = Object.keys(select).reduce((obj, prop) => {
          obj[prop] = walkTree(select[prop], ctx, evaluate);
          return obj;
      }, {});
  } else {
      result = evaluate(select, ctx);
  }
  return typeof select === 'string' && Array.isArray(result)
      && result.length <= 1
     ? result[0]
     : result;
}


function evaluateDom(select, ctx, evaluate, query) {
  try {
  //    let $ = cheerio.load(ctx)
      //if(!select.match(/^\/|\*\/|\.\//ig) && select.localeCompare('*') !== 0) { // probably XPath, fall through
      //    return query(select);
      //}
  } catch (e) {
      // TODO: determine any side effects of ignoring
      if(e.name !== 'SyntaxError') {
          console.log(select.localeCompare('*'))
          console.log(select)
          console.log(query)
          throw e
      }
  }
  
  try {
      if(select.includes('//*')) {
          console.warn(`Possible slow query evaluation due to wildcard: ${select}`)
      }
      // defaults to trying for iterator type
      //   so it can automatically be ordered
      var iterator = evaluate(select, ctx, null,
          wgxpath.XPathResultType.ORDERED_NODE_ITERATOR_TYPE, null)
      //var iterator = evaluate(select, ctx, null, 5, null)
      // TODO: create a pattern regonizer for bodyless while
      var co = []
      var m
      while (m = iterator.iterateNext()) {
          co.push(m.nodeValue || m)
      }
      return co
  } catch (e) {
      if(e.message.includes('Value should be a node-set')
         || e.message.includes('You should have asked')) {
          var result = evaluate(select, ctx, null,
              (XPathResult || {}).ANY_TYPE || 0, null)
          return result.resultType === ((XPathResult || {}).NUMBER_TYPE || 1)
              ? result.numberValue
              : result.resultType === ((XPathResult || {}).STRING_TYPE || 2)
              ? result.stringValue
              : result.resultType === ((XPathResult || {}).BOOLEAN_TYPE || 3)
              ? result.booleanValue
              : result.resultValue
      }
      throw e;
  }
}

// parse as html if it's string,
//   if there is no context convert the tree to html
function selectDom(select, ctx) {
  // var cheerio = require('cheerio');
  if(typeof ctx === 'string') {
      var dom = new JSDOM(ctx);
      wgxpath.install(dom.window, true);
      ctx = dom.window.document;
  }
  var eval = ctx.evaluate || ctx.ownerDocument.evaluate;
  var query = ctx.querySelector.bind(ctx.ownerDocument)
      || ctx.ownerDocument.querySelector.bind(ctx.ownerDocument)
  return walkTree(select, ctx, (select, ctx) => {
      return evaluateDom(select, ctx, eval, query)
  })
}

// TODO: try catch with esquery, vm.runInThisContext, conver and select DOM, and jsel

// from least nuanced to most nuanced, CSS -> XPath -> custom ASTQ
//   Most xpath like //Element will not work on CSS, might have a problem with *
function evaluateQuery(select, ctx) {
  try {
      var esquery = require('esquery');
      // we might have to help out the CSS parser here
      if(!select.match(/^\/\/|\*\/|\.\//ig)) // probably XPath, fall through
          return esquery(ctx, select);
  } catch (e) {
      if(!e.name.includes('SyntaxError')
          && !e.message.includes('Cannot find module')) {
          throw e;
      }
  }
  
  try {
      var jsel = require('jsel');
      return jsel(ctx).selectAll(select);
  } catch (e) {
      if(!e.message.includes('XPath parse error')
        && !e.message.includes('Unexpected character')
        && !e.message.includes('Cannot find module')) {
          throw e;
      }
  }
  try {
      var ASTQ = require("astq");
      var astq = new ASTQ();
      return astq.query(ctx, select);
  } catch (e) {
      if(!e.message.includes('query parsing failed')) {
          throw e;
      }
  }
  
  throw new Error(`Could not parse select query ${JSON.stringify(select)} using XPath, CSS, or ASTQ`);
}

function selectTree(select, ctx) {
  // TODO: when converting to html, make sure to only return
  //   matching child objects not their attributes containers
  // TODO: something when we receive a string?
  //   Try to parse with all different selectors?
  return walkTree(select, ctx, evaluateQuery)
}


module.exports = {
  walkTree,
  evaluateDom,
  evaluateQuery,
  selectTree,
  selectDom
}
