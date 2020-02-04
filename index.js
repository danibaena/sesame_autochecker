const cypress = require('cypress')

const testPaths = {
    'sesameAutocheckin': './cypress/integration/sesame_autochecker_in_spec.js',
    'sesameAutocheckout': './cypress/integration/sesame_autochecker_out_spec.js',
}

const sesameCheckin = (testPath) => {
    cypress.run({
      // Use these settings to run in chrome instead electron browser
      //browser: 'chrome',
      //config: {
        //chromeWebSecurity: false
      //},
      spec: [testPath]
    })
}

const sesameCheckout = (testPath) => {
    cypress.run({
      // Use these settings to run in chrome instead electron browser
      //browser: 'chrome',
      //config: {
        //chromeWebSecurity: false
      //},
      spec: [testPath]
    })
}
sesameCheckin(testPaths['sesameAutocheckin'])
sesameCheckout(testPaths['sesameAutocheckout'])
