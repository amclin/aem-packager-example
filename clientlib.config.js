/**
 * Configuration file for aem-clientlib-generator
 */
module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: 'dist/clientlibs',

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: 'example',
      assets: {
        js: [
          'src/js/*.js'
        ],
        css: [
          'src/css/*.css'
        ]
      },
      // Clientlib categories this will register to
      categories: [
        'mygroup.myapp.clientlibs'
      ],
      // Prevent AEM from minifying JS bundle with ancient YUI
      jsProcessor: [
        'default:none',
        'min:none'
      ],
      // Package format XML for vault or JSON for SLING-INF
      serializationFormat: 'xml'
    }
  ]
}
