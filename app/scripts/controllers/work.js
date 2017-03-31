'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

routerApp.controller('workController',function($scope, $http){
    $http.get('/api/work')
        .success(function(data) {
            $scope.myData = data;
        })
    $scope.addItem = function(){
        $scope.myData.works.push({
            title: $scope.newTitle,
            author: $scope.newAuthor,
            like:$scope.newLike,
            comment:$scope.newComment
        });
    }
    $scope.editItem = function (myTable) {
        $scope.saveTitle = angular.copy(myTable.title);
        $scope.saveAuthor = angular.copy(myTable.author);
        $scope.saveLike = angular.copy(myTable.like);
        $scope.saveComment = angular.copy(myTable.comment);
    };

    $scope.orderProp='title';

    $scope.tab = function (tabIndex) {
        if (tabIndex == 1){
            $scope.orderProp='title';
        }
        if (tabIndex == 2){
            $scope.orderProp = 'author';
        }
        if (tabIndex == 3){
            $scope.orderProp = 'like';
        }
        if (tabIndex == 4){
            $scope.orderProp = 'comment';
        }

    };

    $scope.sort = function(item) {
        return item[$scope.orderProp];
    }

});
