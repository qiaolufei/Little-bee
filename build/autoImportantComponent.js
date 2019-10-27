var path = require('path')
var fs = require('fs')
var chalk = require('chalk')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const filePath = path.resolve(__dirname, '../src/router/index.js')
const file = require(filePath)

function ImportantComponent() {

  let results = [],
    plugins = []

  const getC = function (usingComponents) {
    if (typeof usingComponents !== 'object') return
    for (let key in usingComponents) {
      if (key.split('-')[0] !== 'wux') continue
      const c = key.replace('wux-', '')
      results.push(c)
      try {
        const f = path.resolve(__dirname, '../node_modules/wux-weapp/dist/' + c + '/index.json')
        let date = fs.readFileSync(f, 'utf-8')
        date = JSON.parse(date)
        if (!date.usingComponents) continue
        getC(date.usingComponents)
      } catch (e) {
        console.log(chalk.yellow(e))
      }
    }
  }
  Array.isArray(file.pages) && file.pages.forEach(page => {
    if (!page.config || !page.config.usingComponents) return
    getC(page.config.usingComponents)
  })
  if (file.usingComponents) {
    getC(file.usingComponents)
  }
  results = [...new Set(results)]
  results.forEach(c => {
    const to = path.resolve(__dirname, '../static/wux/' + c)
    if (fs.existsSync(to)) return
    plugins.push(new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../node_modules/wux-weapp/dist/' + c),
      to
    }]))
  })
  return plugins
}

module.exports = ImportantComponent
