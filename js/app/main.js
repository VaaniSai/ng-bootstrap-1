require.config({
	shim: {
		'angular': {
            		exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}
	},
	paths: {
		'angular': '../../bower_components/angular/angular.min',
		'angular-route': '../../bower_components/angular-route/angular-route.min'
	}
});

// This code might be called before the require.config() in main.js
// has executed. When that happens, require.js will attempt to
// load 'scripts/foo.js' instead of 'scripts/libs/foo-1.1.3.js'
require(['index'], function(app) {
	app.start();
	return app;
});