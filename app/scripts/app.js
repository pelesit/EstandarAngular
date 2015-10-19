(function () {
	angular.module('GestionDocumental',['ngRoute','ngResource'])
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
			}).when('/externo', {
					templateUrl: 'scripts/modules/externo/externo-template.html',
					controller: 'externoController',
					controllerAs: 'externo'
				}).otherwise({
			redirectTo: '/home'
		});
	});
})();
