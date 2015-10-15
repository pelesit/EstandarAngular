module.exports = function(config){
  config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections
    basePath : '../',

    // files to include, ordered by dependencies
    files : [
      // include relevant Angular files and libs
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',

      // include JS files
      'app/scripts/**/*.js',
      'app/scripts/modules/**/*.js',
      'app/scripts/modules/main/*.js',
      'app/scripts/app.js',

      // include html template files
      // 'app/partials/directives/*.html',
      // 'app/partials/*.html',

      // include unit test specs
      'test/unit/*.js'
    ],
    // files to exclude
    exclude : [
       'app/bower_components/angular/*.min.js'
    ],

    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : false,

    // testing framework, be sure to install the correct karma plugin
    frameworks: ['jasmine'],

    // browsers to test against, be sure to install the correct browser launcher plugins
    browsers : ['PhantomJS'],

    // map of preprocessors that is used mostly for plugins
    preprocessors: {
      // 'app/partials/directives/*.html': 'html2js',
      // 'app/partials/*.html': 'html2js'

      // test coverage
      'app/scripts/modules/**/*.js': ['jshint', 'coverage'],
      'app/scripts/directives/*.js': ['jshint', 'coverage'],
      'app/scripts/services/*.js': ['jshint', 'coverage'],
      'app/scripts/filters/*.js': ['jshint', 'coverage'],
      'app/scripts/app.js': ['jshint', 'coverage']
    },

    reporters: ['progress', 'coverage'],

    // list of karma plugins
    plugins : [
      'karma-jshint-preprocessor',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],

    // plugin settings
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },
    coverageReporter: {
      // type of file to output, use text to output to console
      type : 'text',
      // directory where coverage results are saved
      dir: 'test-results/coverage/'
      // if type is text or text-summary, you can set the file name
      // file: 'coverage.txt'
    },
    junitReporter: {
      outputFile: 'test-results/junit-results.xml'
    }
})}
