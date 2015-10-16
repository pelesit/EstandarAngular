function servicioCompartido (){

  var vm = this;

  vm.filas = [];

  return vm;
}

angular.module('GestionDocumental')
.factory ('servicioCompartido', servicioCompartido);
