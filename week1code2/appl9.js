/*kod do powiekszania czcionki 
//i pokazanie rówżnych form wyświetlania w konsoli danych
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
*/


//minification code
(function()
{
'use strict'

angular.module('DIApp', [])

//.controller('DIController', ['$scope','$filter', DIController]);
.controller('DIController', DIController);

DIController.$inject=['$scope','$filter'];
function DIController ($scope, $filter){
    $scope.name="Witek";

    $scope.upper = function (){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
}

})();


//minifier code ze storny https://www.toptal.com/developers/javascript-minifier
//angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(a,b,c){a.name="Witek",a.upper=function(){var c=b("uppercase");a.name=c(a.name)}}])
//minifier codev2 ze storny https://www.toptal.com/developers/javascript-minifier
//!function(){"use strict";function a(a,b){a.name="Witek",a.upper=function(){var c=b("uppercase");a.name=c(a.name)}}angular.module("DIApp",[]).controller("DIController",a),a.$inject=["$scope","$filter"]}()