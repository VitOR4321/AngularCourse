(function () {
    'use strict';
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
    $scope.name = "Witek";
    $scope.stateOfBeing = "hungry"

    $scope.sayMessage = function(){
        return "lubie placki";
    };

    $scope.feedYaakov = function(){
        $scope.stateOfBeing = "fed"
    }
}

})();