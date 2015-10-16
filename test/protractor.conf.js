exports.config = {
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  specs: [
    '../test/e2e/*.js'
  ],

  //Navegadores en los que se realizarán las pruebas, por cada navegador se debe especificar un driver
   multiCapabilities: [
     //{'browserName': 'firefox'},
     //{'browserName': 'safari'},
     //{'browserName': 'internet explorer'},
     {'browserName': 'chrome'}],

  baseUrl: 'http://localhost:9000/',
  framework: 'jasmine'
};
