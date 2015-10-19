module.exports = function(config){
  config.set({

    basePath : '../',

    files : [

      //Dependencias de angular
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',

      //Dependencias propias de desarrollo
      'app/scripts/**/*.js',
      'app/scripts/modules/**/*.js',
      'app/scripts/app.js',

      //Dependencias de pruebas unitarias
      'test/unit/*.js'
    ],

    //karma tiene su propia característica AutoWatch pero grunt también puede hacer esto
    autoWatch : false,

    //Framework de pruebas
    frameworks: ['jasmine'],

    //Navegadores por defecto para probar no visuales
    browsers : ['PhantomJS'],

    preprocessors: {

      //Cobertura de pruebas y jshint
      'app/scripts/directives/*.js': ['jshint', 'coverage'],
      'app/scripts/filters/*.js': ['jshint', 'coverage'],
      'app/scripts/modules/**/*.js': ['jshint', 'coverage'],
      'app/scripts/services/*.js': ['jshint', 'coverage'],
      'app/scripts/app.js': ['jshint', 'coverage']
    },

    reporters: ['progress', 'coverage'],

    plugins : [
      'karma-jshint-preprocessor',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],

    //Configuración de plugin
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },
    coverageReporter: {
      //Posibles tipos de archivo: html,lcov,lcovonly,text,text-summary,
      //cobertura (xml soportado por jenkins)
      //Nota: Si el tipo del archivo es text or text-summary se debe setiar la propiedad file
      type : 'cobertura',
      dir: 'test-results/coverage/'
      // file: 'coverage.txt'
    }
})}
