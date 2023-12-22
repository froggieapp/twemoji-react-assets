const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ originalPath  }) => {
    const basename = path.basename(originalPath, path.extname(originalPath))
    const exportName = `Svg_${basename}`.replace(/-/g, '_')
    return `export { default as ${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate