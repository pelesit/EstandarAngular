angular.module('GestionDocumental',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'scripts/modules/main/main-template.html',
		controller: 'mainController',
		controllerAs: 'main'
	}).when('/captura', {
			templateUrl: 'scripts/modules/captura/captura-template.html',
			controller: 'capturaController',
			controllerAs: 'captura'
		}).otherwise({
		redirectTo: '/home'
	});
});
