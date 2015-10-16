//var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  specs: [
    '../test/e2e/*.js'
  ],
  /*
  allScriptsTimeout: 120000000,
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 600000000
  },
  includeStackTrace: true,
  debug: true,
  onPrepare: function() {
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tests-results/screenshotsE2E'
      }));
      protractor.basePath = __dirname;
      functionsApi = function () {
          return require(protractor.basePath+'/e2e/api'+ '/apiProtractor.js');
      };
      browser.catchCoverage = false;
	},*/
  //Navegadores en los que se realizarán las pruebas, por cada navegador se debe especificar un driver
   multiCapabilities: [
     //{'browserName': 'firefox'},
     //{'browserName': 'safari'},
     //{'browserName': 'internet explorer'},
     {'browserName': 'chrome'}],
  baseUrl: 'http://localhost:9000/',
  framework: 'jasmine'
};
