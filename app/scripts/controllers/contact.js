'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form

var myapp2 = angular.module('qwe',$http);
	myApp2.controller('contactCtrl',function($scope,$http){
$http.get('/api/location')
        .success(function(data) {
            $scope.locdata = data;
});

$scope.date1 = new Date();

$scope.nextviw="#form_2"

$scope.menuview="#menu2"
	
	}
	);



