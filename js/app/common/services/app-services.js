/**
	####################################################
	
	Define common services like this in this Directory.

	####################################################
*/
define(['angular', 'google-maps-api'], function (ng, googleMapsApi) {
	var asModule = ng.module('appServicesModule', []);
	// Define your services here
	asModule.factory('location', ['$window', '$q', function (win, $q) {
		var successFunction = function (position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			codeLatLng(lat, lng)
		}, errorFunction = function () {
		    console.log("Geocoder failed");
		}, codeLatLng = function (lat, lng) {
	    		var latlng = new google.maps.LatLng(lat, lng);
	    		var defer = $q.defer();
		    	geocoder.geocode({'latLng': latlng}, function(results, status) {
		      		if (status == google.maps.GeocoderStatus.OK) {
		      			console.log(results)
		        			if (results[1]) {
		             			for (var i=0; i<results[0].address_components.length; i++) {
		            					for (var b=0;b<results[0].address_components[i].types.length;b++) {
		                					if (results[0].address_components[i].types[b] == "locality") {
		                    						city= results[0].address_components[i];
		                    						continue;
		                					}
		                					if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
		                    						state= results[0].address_components[i];
		                    						continue;
		                					}
		            					}
		        				}
		        				//city data
		        				cityNCountry = city.long_name + ", " + state.long_name;
				        	} else {
				          		defer.reject("No results found");
					}
	      			} else {
		        			defer.reject("Geocoder failed due to: " + status);
		      		}
		    	});
		    	return defer.promise;
		}, geocoder = new google.maps.Geocoder(),
		cityNCountry = '';
		return {
			'ask': function () {
				if (win.navigator.geolocation) {
				    win.navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
				} 
			},
			'getCityNCountry' : function () {
				return cityNCountry;
			}
		}
	}]);
	return asModule;
});