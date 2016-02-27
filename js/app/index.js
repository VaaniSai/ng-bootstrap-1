//my/shirt.js now does setup work
//before returning its module definition.
define(['angular', 'angular-route'], function (ng, ngRoute) {
	//Do setup work here
	var app = ng.module('app', ['ngRoute']);
	app.start = function () {
		ng.bootstrap(document, ['app']);
	};
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '../../partials/home/index.html'
		}).when('/dashboard', {
			templateUrl: '../../partials/dashboard/index.html'
		}).when('/settings', {
			templateUrl: '../../partials/settings/index.html'
		});
	}]);
	return app;
});