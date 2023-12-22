(function (){
  'use strict';
  angular.module('CheckOffApp',[])
  .controller('buyController', buyController)
  .controller('alreadyBoughtController', alreadyBoughtController)
  .service('boughtServer', boughtServer);

  buyController.$inject=['boughtServer'];

  function buyController(boughtServer){
    var buy = this;
    buy.items=[
      {
        name: 'bottles of milk',
        quantity: 6
      },
      {
        name: 'bags of chips',
        quantity: 20
      },
      {
        name: 'bars of chocolate ',
        quantity: 12
      },
      {
        name: 'bags of noodles',
        quantity: 40
      },
      {
        name: 'orange juice',
        quantity: 16
      },
      {
        name: 'lollipop',
        quantity: 10
      }
    ];
    buy.moveItem= function(noItem){
      boughtServer.moveItem(noItem, buy.items);
    }
  };

  //second controller
  alreadyBoughtController.$inject=['boughtServer'];

  function alreadyBoughtController(boughtServer){
    var Already = this;
    Already.items = boughtServer.items;
  };

  // service function
  function boughtServer(){
    var bought = this;
    bought.items=[];
    bought.moveItem = function(noItem, listOfItem){
      var item={
        name:'',
        quantity:''
      }
      item.name = listOfItem[noItem].name;
      item.quantity = listOfItem[noItem].quantity;
      listOfItem.splice(noItem, 1);
      bought.items.push(item);
    };
  };

})();
