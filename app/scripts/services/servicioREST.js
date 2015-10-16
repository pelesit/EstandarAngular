(function () {
  'use strict';

    function servicioREST ($resource){
      return $resource('http://jsonplaceholder.typicode.com/', {  },
      {
        getPosts: {
          url: 'http://jsonplaceholder.typicode.com/posts',
          method: 'GET',
          isArray: true
        }
      });
    }

   angular.module('GestionDocumental')
   .factory ('servicioREST', servicioREST);
  })();
