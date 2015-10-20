(function () {
  'use strict';
  function servicioCompartido ($q,servicioREST){

    var vm = this;

    vm.filas = [];

    function recuperarFilasInterno(){
      var filas = [];
      try{
        var json = localStorage.getItem("servicioCompartido.filas");

        if (angular.isUndefined(json) ){json = "[]";}
        if (json ===null ){json = "[]";}
        if (json ==="[object Object]"){json = "[]";}

        filas = JSON.parse(json);

        if (angular.isUndefined(filas) ){filas = [];}
        if (filas ===null ){filas = [];}
      }catch(err){
        console.log(err);
      }
      return filas;
    }

    vm.recuperarFilas =function(){
      var deferred = $q.defer();
      var filas =recuperarFilasInterno();
      try{
        if (filas.length ===0){
          deferred.reject();
        }else{
          deferred.resolve(filas);
        }

      }catch(err){
        deferred.reject();
      }
      return deferred.promise;
    };

    vm.actualizarFila =function(fila){
      var deferred = $q.defer();
      try{
        var filas = recuperarFilasInterno();
        filas.push(fila);
        localStorage.setItem("servicioCompartido.filas", JSON.stringify(filas));
        filas = recuperarFilasInterno();
        deferred.resolve(filas);
      }catch(err){
        deferred.reject();
      }
      return deferred.promise;
    };
    vm.recuperarFila =function(codigo){
      var deferred = $q.defer();
      try{
        var filas = recuperarFilasInterno();
        var fila=null;
        angular.forEach(filas,function(x){
          if (x.id === codigo){
            fila = x;
          }
        });
        if (fila === null){
          deferred.reject();
        }else{
          deferred.resolve(fila);
        }

      }catch(err){
        deferred.reject();
      }
      return deferred.promise;
    };
    vm.eliminarFila =function(codigo){
      var deferred = $q.defer();
      try{
        var filas = recuperarFilasInterno();
        var fila={};
        angular.forEach(function(x){
          if (x.id === codigo){
            fila = x;
          }
        });

        var index = filas.indexOf(fila);
  	    filas.splice(index, 1);

        localStorage.setItem("servicioCompartido.filas", JSON.stringify(filas));
        deferred.resolve("OK");
      }catch(err){
        deferred.reject();
      }
      return deferred.promise;
    };




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
