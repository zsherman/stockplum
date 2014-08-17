angular.module("app").controller('StockCtrl', function ($scope, $http, $routeParams) {
  $scope.stock = {'name': 'Tesla', 'symbol': 'tsla', 'market': 'nasdaq', 'price': '223.57', 'currencyChange': '.03', 'percentageChange': '.01'};
  $scope.stock.symbol = $routeParams.stockSymbol;
});