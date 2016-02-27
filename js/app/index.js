//my/shirt.js now does setup work
//before returning its module definition.
define(['angular', 'angular-route', 'appControllerModule', 'appDirectivesModule', 'appServicesModule', 'appConstantModule'], function (ng, ngRoute, appControllerModule, appDirectivesModule, appServicesModule, appConstantModule) {
	//Do setup work here
	var app = ng.module('app', ['ngRoute', 'appControllerModule', 'appDirectivesModule', 'appServicesModule', 'appConstantModule']);
	app.start = function () {
		ng.bootstrap(document, ['app']);
	};
	app.register = {};
	app.getController = function (fileAlias, resolveFnName) {
		return ['$injector', function ($injector) {
			var $q = $injector.get('$q'),
			      defer = $q.defer();
			require([fileAlias], function (ctrlHash) {
				ctrlHash[resolveFnName]($injector).then(function (data) {
					defer.resolve(data);
				});
			});
			return defer.promise;
		}];
	}
	app.config(['$routeProvider', '$controllerProvider', '$compileProvider', function ($routeProvider, $controllerProvider, $compileProvider) {
		app.register['controller'] = $controllerProvider.register;
		app.register['directive'] = $compileProvider.directive;
		/* 
			To use following inject $provide & $filterProvider
			app.register['factory'] = $provide.factory;
			app.register['provider'] = $provide.provider;
			app.register['filter'] = $filterProvider.register;
			app.register['service'] = $provide.service;
		*/
		$routeProvider.when('/', {
			templateUrl: '../../partials/home/index.html'
		}).when('/dashboard', {
			templateUrl: '../../partials/dashboard/index.html',
			controller: 'dashboardController',
			resolve: {
				registerController: app.getController('dashboardCtrlModule', 'resolver'),
			}
		}).when('/settings', {
			templateUrl: '../../partials/settings/index.html'
		});
	}]);
	return app;
});