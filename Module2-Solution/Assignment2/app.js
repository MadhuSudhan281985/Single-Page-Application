(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.buyItemsList();

  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  list1.isListEmpty = function() {
      return !list1.items.length;
  }
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.boughtItemsList();

  list2.isListEmpty = function() {
      return !list2.items.length;
  }
}


function ShoppingListCheckOffService () {
  var service = this;
  var itemsToBuy =  [
                      {name: "Carrot", quantity: 8},
                      {name: "Potato", quantity: 4},
                      {name: "Apple", quantity: 3},
                      {name: "Onion", quantity: 2},
                      {name: "Coconut Oil", quantity: 1},
                      {name: "Pepper", quantity: 1},
                      {name: "Soap", quantity: 3}
                    ]

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(itemsToBuy.splice(itemIndex, 1)[0]);
  };


  service.buyItemsList = function () {
    return itemsToBuy;
  };

  service.boughtItemsList = function () {
    return boughtItems;
  };
}

})();
