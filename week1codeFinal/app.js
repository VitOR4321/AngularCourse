
(function () {
    'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.food = "";
    $scope.message= "";
    $scope.alertColor = {
        "color" : "black"
      }
    $scope.CheckFood = function(){
        let data = Split($scope.food)
        if (data == "")
        {
            $scope.message= "Please enter data first";
            $scope.alertColor = {
                "color" : "red",
                "border" : "2px solid red"
              }
        }
        else if (data.length > 3)
        {
            $scope.message = "Too much!";
            $scope.alertColor = {
                "color" : "green",
                "border" : "2px solid green"
              }
        }
        else 
        {
            $scope.message = "Enjoy!";
            $scope.alertColor = {
                "color" : "green",
                "border" : "2px solid green"
              }
        }
    };

    function Split(string){
        let array = string.split(',');
        return array
    }
}

})();