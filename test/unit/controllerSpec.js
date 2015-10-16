//Nota: Se debe separar por modulos
describe('Pruebas', function() {
  beforeEach(module('GestionDocumental'));

  describe('MainController', function(){

    var ctrl, service,location;

    beforeEach(inject(function( $controller, servicioCompartido,_$location_) {
      location = _$location_;
      service = servicioCompartido;
      ctrl = $controller('MainController', { servicioCompartido: service, $location : location});
    }));

    it('dos mas dos igual a 4', function () {
      	var resultado = ctrl.sumar(2,2);
       expect(resultado).toBe(4);
     });

    it('tres mas dos igual a 5', function () {
         var resultado = ctrl.sumar(3,2);
         expect(resultado).toBe(5);
     });
  });

  describe('CapturaController', function(){

    var  ctrl, service,location;

    beforeEach(inject(function( $controller, servicioCompartido,_$location_) {
      location = _$location_;
      service = servicioCompartido;
      ctrl = $controller('CapturaController', { servicioCompartido: service, $location : location});
    }));

    it('Anexar registro', function () {

        var cuantos = service.filas.length;
        ctrl.item.id = 4;
        ctrl.item.nombre  = "cuatro";
        ctrl.actualizar(ctrl.item);

        expect(service.filas.length).toBe(cuantos + 1);
     });

    it('Actualizar nombre', function () {

      //crea el registro
      var cuantos = service.filas.length;
      ctrl.item.id = 4;
      ctrl.item.nombre  = "cuatro";
      ctrl.actualizar(ctrl.item);

      //actualiza el registro
      var nombre =service.filas[0].nombre;
      ctrl.item = service.filas[0];
      ctrl.item.nombre = ctrl.item.nombre + " mas dos";
      ctrl.actualizar(ctrl.item);

      expect(service.filas[0].nombre).toBe(nombre + " mas dos");
    });

  });
});
