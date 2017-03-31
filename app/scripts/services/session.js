'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage

routerApp.factory('session', function() {
	return {
		set: function (key, value) {
			return sessionStorage.setItem(key, value);
		},
		get: function (key) {
			return sessionStorage.getItem(key);
		},
		destroy: function (key) {
			return sessionStorage.removeItem(key);
		}
	};
});