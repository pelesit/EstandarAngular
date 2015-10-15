
function servicioCompartido (){

  var servicioCompartido = this;

  servicioCompartido.filas = [];

  return servicioCompartido;
}

angular.module('GestionDocumental')
.factory ('servicioCompartido', servicioCompartido);
