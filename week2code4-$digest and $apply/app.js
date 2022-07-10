(function () {
    'use strict';
angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject=['$scope', '$timeout'];
function CounterController($scope, $timeout){
$scope.counter = 0;

// funkcja z angulara nie wymagająca $digest czy $apply
$scope.upCounter = function (){
$timeout(function (){
    $scope.counter ++;
    console.log("counter incremented!");
}, 2000);
};
    // zwiększanie po kliknieciu po 2 sekundach

    /*sposób pierwszy by połączyć timeout z wyświetleniem na stronie
    $scope.upCounter = function (){
    setTimeout(function (){
        $scope.counter ++;
        console.log("counter incremented!");
         
        //potrzebne żeby zwiększył sie licznik na stronie po kliknięciu
        $scope.$digest();
    }, 2000);
    };
    */

    /*sposób drugi by połączyć timeout z wyświetleniem na stronie
    // w tej metodzie angularjs widzi zewnętrzne funkcjie javascriptu
    $scope.upCounter = function (){
    setTimeout(function (){
        $scope.$apply(function(){
            $scope.counter ++;
            console.log("counter incremented!");
        });
    }, 2000);
    };
    */
}

})();
