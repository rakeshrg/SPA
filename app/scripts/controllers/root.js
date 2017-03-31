'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in
routerApp.controller('userCtrl', function($scope,$location,userService,authenticate) {
    userService.getUserName().then(function(name) {
        $scope.name = name;
    });
    $scope.CurrentDate = new Date();
    $scope.logOut = function() {
        authenticate.logout();
        $location.path("/login");
    }
});