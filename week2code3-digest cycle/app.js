(function () {
    'use strict';
angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject=['$scope'];
function CounterController($scope){
$scope.onceCounter = 0;
$scope.counter = 0;
$scope.name = "Witek";
    $scope.showNumberOfWatchers = function(){
        // wyciagniecie danych ile przebiegów watchers 
        console.log("# of Watchers", $scope.$$watchersCount);
    };
// funkcja dodania watchers
    $scope.countOnce = function (){
        $scope.onceCounter=1;
    };
$scope.upCounter = function (){
    $scope.counter ++;
    };

    $scope.$watch( function(){
        // druga opcja wyświetlenia watches
        console.log("Digest Loop Fired!");
        // wynik przycisku z funkcja upCounter wyświetla wynik o 2 wiekszy bo zmienia watches i sprawdza czy nie ma zmiany
        // wynik przycisku z funkcja countOnce po resecie konsoli da wynik 1 a po odpaleniu całej strony 2
        // dzieje sie tak bo po odpaleniu strony zapisuje zmiane i sprawdza czy nic sie nie zmienił a przy resecie sprawdza czy nic sie nie zmieniło
    });

/* funkcja pokazujaca stara i nowa wartość watchers 
// pierwsza opcja wyświetlenia watches
    $scope.$watch('onceCounter', function  (newValue, oldValue) {
        console.log("once old value", oldValue);
        console.log("once new value", newValue);
    });

    $scope.$watch('counter', function  (newValue, oldValue) {
        console.log("counter old value", oldValue);
        console.log("counter new value", newValue);
    });
*/


}



})();
