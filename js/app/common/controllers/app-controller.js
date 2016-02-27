/**
	####################################################
	
	Define common controllers here.

	####################################################
*/
define(['angular'], function (ng) {
	var acModule = ng.module('appControllerModule', []);
	acModule.controller('appController', ['$scope', function ($scope) {
		return $scope;
	}]);
	return acModule;
});