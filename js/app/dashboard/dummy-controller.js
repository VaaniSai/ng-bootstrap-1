/**
	####################################################
	
	Define dashboard controllers here.

	####################################################
*/
define(['index'], function (app) {
	var dashboardCtrlModule = {};
	app.register.controller('dashboardController', ['$scope', function ($scope) {
		return $scope;
	}]);
	dashboardCtrlModule.resolver = function ($injector) {
		var $q = $injector.get('$q'),
		      defer = $q.defer();
		window.setTimeout(function () {
			defer.resolve({});
		}, 1000);
		return defer.promise;
	}
	return dashboardCtrlModule;
});