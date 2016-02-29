/**
	####################################################
	
	Define common controllers here.

	####################################################
*/
define(['angular'], function (ng) {
	var acModule = ng.module('appControllerModule', []);
	acModule.controller('appController', ['$scope', '$rootScope', function ($scope, $rootScope) {
		/**
			Loader model for loaders across the App
		*/
		$scope.loader = {};
		$scope.loader.update = function (type, flag) {
			$scope.loader[type] = flag;
		}

		/**
			Bind route change events
		*/
		$rootScope.$on('$routeChangeStart', function () {
			$scope.loader.update('routeChange', true);
		});
		$rootScope.$on('$routeChangeSuccess', function () {
			$scope.loader.update('routeChange', false);
		});
		$rootScope.$on('$routeChangeError', function () {
			$scope.loader.update('routeChange', false);
		});
		return $scope;
	}]);
	return acModule;
});