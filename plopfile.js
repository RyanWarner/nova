const paths = require('./config/paths')
const fs = require('fs')
const componentGenerator = require('./config/plop/component/component.generator')
const pageGenerator = require('./config/plop/page/page.generator')

module.exports = function (plop) {
  plop.setHelper('curlyWrap', t => `{${t}}`)

  plop.setActionType('addComponentToIndex', (answers) => {
    return new Promise((resolve, reject) => {
      const exportString = `export ${answers.componentName} from './${answers.componentName}/${answers.componentName}'\n`

      fs.appendFile(`${paths.srcShared}/components/index.js`, exportString, err => {
        if (err) throw reject(new Error('Failed to export component from components/index'))
        resolve('Added export to components/index')
      })
    })
  })

  plop.setActionType('addPageToIndex', (answers) => {
    return new Promise((resolve, reject) => {
      const exportString = `export ${answers.pageName} from './${answers.pageName}/${answers.pageName}'\n`

      fs.appendFile(`${paths.srcShared}/pages/index.js`, exportString, err => {
        if (err) throw reject(new Error('Failed to export page from pages/index'))
        resolve('Added export to pages/index')
      })
    })
  })

  plop.setGenerator('Component', componentGenerator)

  plop.setGenerator('Page', pageGenerator)
}
