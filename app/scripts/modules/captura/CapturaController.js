(function () {
  'use strict';
	function capturaController(servicioCompartido,$location) {

		var vm = this;
		vm.item = {};
    function cargarInicial(){
        var promesa =servicioCompartido.recuperarFilas();
        promesa.then(function(success){
          vm.filas  =success;
        }, function(error){
          vm.filas = [];
        });
    }




    function cambiarFilas(fila){
      var promesa =servicioCompartido.actualizarFila(fila);
      promesa.then(function(success){
        vm.filas  =success;
        vm.item={};
      }, function(error){
          console.log(error);
      });
    }


    vm.obtenerFilas = cargarInicial;
    
	  vm.actualizar = function(fila){
      var promesa =servicioCompartido.recuperarFila(fila.id);
      promesa.then(function(success){
        var promesaeliminar =servicioCompartido.eliminarFila(fila.id);
        promesaeliminar.then(function(success){
          cambiarFilas(fila);
        }, function(error){
            console.log(error);
        });
      }, function(error){
        cambiarFilas(fila);
      });
	  };

	  vm.cargar = function(fila){
      var promesa =servicioCompartido.recuperarFila(fila.id);
      promesa.then(function(success){
        vm.item  =success;
      }, function(error){
        vm.item = [];
      });
	  };
	  vm.ira = function(){
			$location.path('/home');
		};
    cargarInicial();
	}

	angular.module('GestionDocumental')
	.controller('capturaController',  capturaController);
})();
