(function () {
  'use strict';
	function externoController(servicioCompartido,$location) {

		var vm = this;
	  vm.posts = servicioCompartido.posts;

	  vm.cargar = function(){
        var promise =servicioCompartido.recuperarDatos();
        promise.then(function(success){
          vm.posts = success;
        }, function(error){
          console.log('error');
        });
	  };
	  vm.ira = function(){
			$location.path('/home');
		};
	}

	angular.module('GestionDocumental')
	.controller('externoController',  externoController);
})();
