angular.module("app").factory("Stock", function($q, $http, $resource) {
  // Stock Constructor
  function Stock() {
    this.service = $resource('/api/stocks/symbols/:stockSymbol', {stockSymbol: '@stockSymbol'});
  }

  // Index method for stock resource
  Stock.prototype.all = function() {
    return this.service.query();
  };

  // Send a new stock object back to stock_controller.js
  return new Stock();

});