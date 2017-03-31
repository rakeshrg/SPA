'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

routerApp.controller('login', function($scope, $location, authenticate, session) {
    $scope.submitForm = function() {
        session.set("user", $scope.username);
        session.set("password", $scope.password);
        authenticate.login($scope.username, $scope.password, function(response) {
            if(response) {
                $location.path("/root/work");
            }
        });
    }
});