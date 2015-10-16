angular.module('GestionDocumental',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'scripts/modules/main/main-template.html',
		controller: 'MainController',
		controllerAs: 'main'
	}).when('/captura', {
			templateUrl: 'scripts/modules/captura/captura-template.html',
			controller: 'CapturaController',
			controllerAs: 'captura'
		}).otherwise({
		redirectTo: '/home'
	});
});
