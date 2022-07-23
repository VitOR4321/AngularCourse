
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      let buyItem = this;

      buyItem.itemName = "";
      buyItem.itemQuantity = "";

      buyItem.items = ShoppingListCheckOffService.getBuyItems();

      buyItem.removeItem = function (itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex);
      }
    
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      let alreadyBoughtItem = this;

      alreadyBoughtItem.itemName = "";
      alreadyBoughtItem.itemQuantity = "";
      alreadyBoughtItem.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        let service = this;
      
        // List of shopping items
        let toBuy = [
          {
              name: "cookies",
              quantity: "5 bags"
          },
          {
              name: "milk",
              quantity: "3 boxes"
          },
          {
              name: "apples",
              quantity: "6 pieces"
          },
          {
              name: "bannans",
              quantity: "5 pieces"
          },
          {
              name: "sausages",
              quantity: "2 bags"
          },
      ];
        // List of bought items
      let bought = [];
      let temp = [];
      
        service.addItem = function (itemName, quantity) {
          let item = {
            name: itemName,
            quantity: quantity
          };
          bought.push(item);
        };
      
        service.getBuyItems = function () {
          console.log(toBuy)
          return toBuy;
        };

        service.removeItem = function(itemIndex){
        toBuy.splice(itemIndex, 1);
        };

        service.getBoughtItems = function () {
          return bought;
        };

      }

})();