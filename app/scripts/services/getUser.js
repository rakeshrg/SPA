'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information

routerApp.factory('userService',function($http,session) {
	return {
		getUserName: function() {
			var promise;
			var username = session.get("user");
			promise = $http.get('/api/getUser',{params:{user:username}}).then(function (response) {
				return response.data.name;
			});
			return promise;
		}
	};
});

