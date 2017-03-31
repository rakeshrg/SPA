'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged

routerApp.factory('authenticate', function($http,session) {
    return {
        login: function(username,password,callback) {
            $http.post('/api/login', { userName: username, password: password })
                .success(function (response) {
                    callback(response);
                });
        },
        logout: function() {
            session.destroy("user");
            session.destroy("password");
        },
        islogged:function(){

        }
    }
});