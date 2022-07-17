(function () {
    'use strict';
    angular.module('ControllerAsApp',[])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory){
        let list1 = this;

        let shoppingList = ShoppingListFactory();

        list1.items = shoppingList.getItems();

        list1.itemName = "";
        list1.intemQuantity="";

        list1.addItem = function(){
            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        }
        list1.removeItem = function(itemIndex){
            shoppingList.removeItem(itemIndex);
        };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory){
        let list2 = this;

        let shoppingList = ShoppingListFactory(3);

        list2.items = shoppingList.getItems();

        list2.itemName = "";
        list2.intemQuantity="";

        list2.addItem = function(){
            try{
                shoppingList.addItem(list2.itemName, list2.itemQuantity);
            }catch (error)
            {
                list2.errorMessage = error.message;
            }
           
        }
        list2.removeItem = function(itemIndex){
            shoppingList.removeItem(itemIndex);
        };
    }

    function ShoppingListService(maxIndex){
        let service = this;
        let items = [];

        service.addItem = function(itemName,quantity){
            if((maxIndex === undefined)||(maxIndex !== undefined)&&(items.length<maxIndex)){
                let item = {
                    name:itemName,
                    quantity: quantity
                };
                items.push(item);
            }
            else{
                throw new Error("Max items (" +maxIndex+ ") reached.");
            }
        };

        service.removeItem = function(itemIndex){
            items.splice(itemIndex,1);
        };

        service.getItems = function () {
            return items;
          };
        }

          function ShoppingListFactory(){
            let factory = function(maxItems){
                return new ShoppingListService(maxItems);
            };
            return factory;
          }

})();