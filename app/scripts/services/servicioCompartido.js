(function () {
  'use strict';
  function servicioCompartido ($q,servicioREST){

    var vm = this;

    vm.filas = [];

    vm.recuperarDatos=function(){
      var deferred = $q.defer();
      servicioREST.getPosts({},function (data){
          deferred.resolve(data);
        },
        function(error){
          deferred.reject();
        }
      );
      return deferred.promise;
    };

    return vm;
  }

  angular.module('GestionDocumental')
  .factory ('servicioCompartido', servicioCompartido);
})();
