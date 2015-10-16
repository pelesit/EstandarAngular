function CapturaController(servicioCompartido,$location) {

	var vm = this;
	vm.item = {};
  vm.filas = servicioCompartido.filas;

  vm.actualizar = function(item){
    servicioCompartido.filas.push(item);
    vm.filas = servicioCompartido.filas ;
    vm.item = {};
  };

  vm.cargar = function(item2){

    var index = vm.filas.indexOf(item2);
    vm.filas.splice(index, 1);
    servicioCompartido.filas = vm.filas;
    vm.item=item2;

  };
  vm.ira = function(){
		$location.path('/home');
	};
}

angular.module('GestionDocumental')
.controller('CapturaController',  CapturaController);
