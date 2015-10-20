(function () {
  'use strict';
	function mainController($location,servicioCompartido) {

		var vm = this;

    function cargarInicial(){
        var promise =servicioCompartido.recuperarFilas();
        promise.then(function(success){
          vm.filas  =success;
        }, function(error){
          vm.filas = [];
        });
    }

		vm.sumar = function(a,b){
			return a+b;
		};

		vm.cambiar=function(){
				cargarInicial();
		};

		vm.ira = function(){
			$location.path('/captura');
		};
		vm.iraext = function(){
			$location.path('/externo');
		};
    cargarInicial();

	}

	angular.module('GestionDocumental')
	.controller('mainController',mainController);
})();
