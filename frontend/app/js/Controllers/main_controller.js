angular.module("app").controller('MainCtrl', function ($scope, $http, $routeParams, $resource) {
  $scope.tracked = [
    {symbol: "TSLA", name: "Tesla Motors"},
    {symbol: "SCTY", name: "Solar City"},
    {symbol: "AAPL", name: "Apple Computers"},
    {symbol: "MSFT", name: "Microsoft"},
    {symbol: "API", name: "API"},
    {symbol: "BKW", name: "BKW"}
  ];

  $('.sidebar li').click(function(e) {
    console.log('open');
    $('.panel').addClass('open');
  });

  $scope.upOrDown = function(stock) {
    var direction = stock.changein_percent.charAt(0) === "+";
    return direction;
  };

});