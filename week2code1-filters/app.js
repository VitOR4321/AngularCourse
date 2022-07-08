(function () {
    'use strict';
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope','$filter'];
function MsgController($scope, $filter){
    $scope.name = "Witek";
    $scope.stateOfBeing = "hungry"
    $scope.cookieCost=.45;

    $scope.sayMessage = function(){
        var msg = "lubie placki"
        // filter w pliku js
        var output = $filter('uppercase')(msg);
        return output;
    };

    $scope.feedYaakov = function(){
        $scope.stateOfBeing = "fed"
    }
}

})();
