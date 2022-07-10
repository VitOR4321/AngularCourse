(function () {
    'use strict';
angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject=['$scope', '$timeout'];
function BindingController($scope){
    $scope.firstName="Witek";
    //$scope.fullName="";

    $scope.showNumberOfWatchers = function (){
        console.log("# of Watchers: ",$scope.$$watchersCount);
    };

    $scope.setFullName = function(){
        $scope.fullName = $scope.firstName + " " +"Górski";
    };

    $scope.logFirstName = function () {
        console.log("First name is: ", $scope.firstName);
    };

    $scope.logFullName = function (){
        console.log("Full name is: ",$scope.fullName);
    };
}

})();
