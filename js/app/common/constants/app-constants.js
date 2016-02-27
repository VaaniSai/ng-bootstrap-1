/**
	####################################################

	Define constants here common across all the App to be used whenever necessary

	####################################################
	
	In order to use it in any Controller or Service inject this file into that AMD Module and Inject this module as a Dependent Module. For eg. Refer Index.js

	####################################################
*/
define(['angular'], function (ng) {
	var ccModule = ng.module('appConstantModule', []);
	ccModule.constant('app', {
		'api-urls': {
			/*Define Public API URL's here*/
		},
		'app-config': {
			/*Define App level Configuration JSON here*/
		},
	});
	return ccModule;
});