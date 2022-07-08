(function () {
    'use strict';
angular.module('MsgApp', [])
.controller('MsgController', MsgController)
// factor filter
.filter('loves', LovesFilter)
// factor filter z argumentami, bez dodania do injecta bo dorazu w html bedzie wywołany
.filter('truth', TruthFilter);
//dodanie do injecta nazwy filtra z factor i Filter np. lovesFilter
MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter){
    $scope.name = "Witek";
    $scope.stateOfBeing = "hungry"

    $scope.sayMessage = function(){
        var msg = "lubie placki"
        return msg;
    };

    $scope.sayLovesMessage = function(){
        var msg = "lubie placki"
        msg = lovesFilter(msg)
        return msg;
    };

    $scope.feedYaakov = function(){
        $scope.stateOfBeing = "fed"
    };
}
// funkcja factory customowego filtru
function LovesFilter() {
    return function (input) {
        input = input || "";// sprawdza czy istnieje
        input = input.replace("lubie", "kocham");
        return input;
    };
}

// funkcja factory customowego filtru z dodatkowymi argumentami
function TruthFilter(){
    return function(input, target, replace){
        input = input || "";// sprawdza czy istnieje
        input = input.replace(target, replace);
        return input;
    }
}


})();
