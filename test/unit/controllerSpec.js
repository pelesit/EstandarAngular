//Nota: Se debe separar por modulos
describe('Pruebas', function() {
  beforeEach(module('GestionDocumental'));

  describe('mainController', function(){

    var ctrl, service,location;

    beforeEach(inject(function( $controller, servicioCompartido,_$location_) {
      location = _$location_;
      service = servicioCompartido;
      ctrl = $controller('mainController', { servicioCompartido: service, $location : location});
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

  describe('capturaController', function(){

    var  ctrl, service,location,q,scope;

    beforeEach(inject(function( $controller, servicioCompartido,_$location_, _$q_) {
      location = _$location_;
      service = servicioCompartido;
      q = _$q_;
      ctrl = $controller('capturaController', { servicioCompartido: service, $location : location});
    }));

    it('Anexar registro', function () {

        var cuantosInicial=0;
        var cuantosFinal=0;
        ctrl.obtenerFilas();


        cuantosInicial = ctrl.filas.length;

        ctrl.item.id = 4;
        ctrl.item.nombre  = "cuatro";
        ctrl.actualizar(ctrl.item);

        ctrl.obtenerFilas();

        cuantosFinal = ctrl.filas.length;

        expect(cuantosFinal).toBe(cuantosInicial + 1);

     });

    it('Actualizar nombre', function () {


      //crea el registro
      ctrl.item.id = 4;
      ctrl.item.nombre  = "cuatro";
      ctrl.actualizar(ctrl.item);

      ctrl.obtenerFilas();



      //actualiza el registro

      var nombre = ctrl.filas[0].nombre;
      ctrl.item = ctrl.filas[0];
      ctrl.item.nombre = ctrl.item.nombre + " mas dos";
      ctrl.actualizar(ctrl.item);

      expect(ctrl.filas[0].nombre).toBe(nombre + " mas dos");
      /**/
    });

  });
});
