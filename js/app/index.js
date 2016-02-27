//my/shirt.js now does setup work
//before returning its module definition.
define(['angular', 'angular-route', 'appControllerModule', 'appDirectivesModule', 'appServicesModule', 'appConstantModule'], function (ng, ngRoute, appControllerModule, appDirectivesModule, appServicesModule, appConstantModule) {
	//Do setup work here
	var app = ng.module('app', ['ngRoute', 'appControllerModule', 'appDirectivesModule', 'appServicesModule', 'appConstantModule']);
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