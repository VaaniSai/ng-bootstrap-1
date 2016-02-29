/**
	####################################################
	
	Define dashboard controllers here.

	####################################################
*/
define(['index'], function (app) {
	var homeCtrlModule = {};
	app.register.controller('homeController', ['$scope', function ($scope) {
		return $scope;
	}]);
	homeCtrlModule.resolver = function ($injector) {
		var $q = $injector.get('$q'),
		      defer = $q.defer();
		window.setTimeout(function () {
			defer.resolve({});
		}, 1000);
		return defer.promise;
	}
	return homeCtrlModule;
});