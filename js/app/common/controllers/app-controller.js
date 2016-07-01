/**
	####################################################
	
	Define common controllers here.

	####################################################
*/
define(['angular', 'jsapi-v1', 'appServicesModule'], function (ng, ININ, appServicesModule) {
	var acModule = ng.module('appControllerModule', ['appServicesModule']);
	acModule.chatConfig = {
	    // URL from which webchat will be loaded
	    "webchatAppUrl": "https://apps.mypurecloud.com/webchat",

	    // Webchat service URL
	    "webchatServiceUrl": "https://realtime.inindca.com:443",

	    // Numeric organization ID
	    "orgId": 1,

	    // String organization ID
	    "orgName": "inin",

	    // Requested agent language skill
	    "language": "English - Written",

	    // Requested agent skills

	    // Priority
	    "priority": 0,

	    // Queue name
	    "queueName": "suraj-test",

	    // Target agent email (OPTIONAL)
	    "agentEmail": "suraj.jadhav@inin.com",

	    // Log level (DEBUG, INFO, WARN, ERROR, or FATAL)
	    "logLevel": "ERROR",

	    // Locale code of end-user which will be used to localize the widget
	    "locale": "en",

	    // Data that will be included with interaction
	    "data": {
	        "firstName": "Omkar",
	        "lastName": "Nagvekar",
	        "addressStreet": "Kandivli",
	        "addressCity": "Mumbai",
	        "addressPostalCode": "400035",
	        "addressState": "MH",
	        "phoneNumber": "+91-9821133547",
	        "phoneType": "Cell",
	        "customerId": 59606
	    },

	    // Company logo (OPTIONAL)
	    "companyLogo": {
	        "url": "https://cdn0.iconfinder.com/data/icons/financial-business/512/company_building-512.png",
	        "width": 600,
	        "height": 149
	    },

	    // Small company logo (OPTIONAL)
	    "companyLogoSmall": {
	        "width": 149,
	        "height": 149,
	        "url": "https://cdn0.iconfinder.com/data/icons/financial-business/512/company_building-512.png"
	    },

	    // Agent avatar image (OPTIONAL)
	    "agentAvatar": {
	        "width": 462,
	        "height": 462,
	        "url": "https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/System%20and%20Internet/Account%20and%20Control.png"
	    },

	    // End-user avatar image (OPTIONAL)
	    "userAvatar": {
	        "width": 462,
	        "height": 462,
	        "url": "https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo-09-512.png"
	    },

	    // Welcome message that will be shown to user (OPTIONAL)
	    "welcomeMessage": "Please wait while we connect you to one of our agents.",

	    // Additional CSS properties if widget is rendered as frame
	    "css": {
	        "width": "100%",
	        "height": "389px"
	    }
	};
	acModule.controller('appController', ['$scope', '$rootScope', 'location', '$window', function ($scope, $rootScope, location, $window) {
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
		location.ask();
		$scope.logCIty = function () {
			var customerLocation = location.getCityNCountry();
			acModule.chatConfig.data['customField1Label'] = 'Customer Location';
			acModule.chatConfig.data['customField1'] = customerLocation;
			acModule.chatConfig.data['customField2Label'] = 'User Agent';
			acModule.chatConfig.data['customField2'] = $window.navigator.userAgent;
			acModule.chatConfig.data['customField3Label'] = 'AppName - AppVersion';
			acModule.chatConfig.data['customField3'] = $window.navigator.appName + '>-<' + $window.navigator.appVersion;
			ININ.webchat.create(acModule.chatConfig, function(err, webchat) {
				if (err) {
			    		throw err;
				}
				// Render to frame
				webchat.renderFrame({
		    			containerEl: 'chat-container'
				});
			});
		}
		console.log('after asked!');
		return $scope;
	}]);
	return acModule;
});