(function () {
  'use strict';
  function soloNumeros(){
    return function(input) {
      return !isNaN(parseFloat(input)) && isFinite(input) ? input : input.substring(0, input.length-1);
    };
  }

  angular.module('GestionDocumental')
  .filter('soloNumeros', soloNumeros);
})();
