(function () {
    'use strict';

    var shoppingList1 = [ "ciastka", "mleko","płatki","owoce","pieczywo", "warzywa"];

    var shoppingList2 = [
        {
            name: "ciastka",
            quantity: "5"
        },
        {
            name: "mleko",
            quantity: "10"
        },
        {
            name: "płatki",
            quantity: "20"
        },
        {
            name: "owoce",
            quantity: "25"
        },
        {
            name: "pieczywo",
            quantity: "30"
        },
        {
            name: "warzywa",
            quantity: "35"
        },
    ];

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);
    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope){
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function(){
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        };
    }

})();
