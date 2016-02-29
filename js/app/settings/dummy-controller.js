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
		defer.resolve({});
		return defer.promise;
	}
	return settingsCtrlModule;
});