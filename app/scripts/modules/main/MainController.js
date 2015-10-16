(function () {
  'use strict';
	function mainController($location,servicioCompartido) {

		var vm = this;

		if (servicioCompartido.filas.length ===0){
			vm.filas = [{id:1,nombre:"uno"},{id:2,nombre:"dos"}];
			servicioCompartido.filas  =vm.filas;
		}else{
			vm.filas = servicioCompartido.filas  ;
		}

		vm.sumar = function(a,b){
			return a+b;
		};

		vm.cambiar=function(){
				vm.filas = servicioCompartido.filas;
		};

		vm.ira = function(){
			$location.path('/captura');
		};
		vm.iraext = function(){
			$location.path('/externo');
		};


	}

	angular.module('GestionDocumental')
	.controller('mainController',mainController);
})();
