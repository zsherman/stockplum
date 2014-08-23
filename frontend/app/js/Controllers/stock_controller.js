angular.module("app").controller('StockCtrl', function ($scope, $http, $routeParams, $resource, Stock) {
  var symbol = $routeParams.stockSymbol;
  var stock = $http.get('/api/stocks/symbol/' + symbol).success(function(data) {
    $scope.stock = data;
    console.log(data);
  });
});