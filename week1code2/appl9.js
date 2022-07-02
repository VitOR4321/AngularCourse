(function()
{
'use strict'

angular.module('DIApp', [])

.controller('DIController', DIController);

function DIController ($scope, $filter, $injector){
    $scope.name="Witek";

    $scope.upper = function (){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

    // wyświetla nazwy argumentów funkcji DIController
    console.log($injector.annotate(DIController));
}

function AnnonateMe (name, job, blah){
    return "Blah!"
}
// wyświetla kod funkcji jako string
//console.log(AnnonateMe.toString());

// wyświetla kod funkcji
//console.log(AnnonateMe);

// wyświetla return funkcji
//console.log(AnnonateMe());

console.log(DIController.toString())


})();
