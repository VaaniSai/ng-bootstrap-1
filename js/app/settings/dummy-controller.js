/**
	####################################################
	
	Define dashboard controllers here.

	####################################################
*/
define(['index'], function (app) {
	var settingsCtrlModule = {};
	app.register.controller('settingsController', ['$scope', function ($scope) {
		return $scope;
	}]);
	settingsCtrlModule.resolver = function ($injector) {
		var $q = $injector.get('$q'),
		      defer = $q.defer();
		window.setTimeout(function () {
			defer.resolve({});
		}, 1000);
		return defer.promise;
	}
	return settingsCtrlModule;
});