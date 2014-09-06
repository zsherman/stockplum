angular.module("app").controller('MainCtrl', function ($scope, $rootScope, $http, $routeParams, $resource, $firebase, $firebaseSimpleLogin) {

  // Initialize Firebase
  var stockFire = new Firebase('https://stockplum.firebaseio.com/');

  // Initialize user auth
  var auth = $firebaseSimpleLogin(stockFire);

  // Get tracked stocks
  $scope.tracked = [
    {symbol: "TSLA", name: "Tesla Motors"},
    {symbol: "SCTY", name: "Solar City"},
    {symbol: "AAPL", name: "Apple Computers"},
    {symbol: "MSFT", name: "Microsoft"},
    {symbol: "API", name: "API"},
    {symbol: "BKW", name: "BKW"}
  ];

  $scope.upOrDown = function(stock) {
    var direction = stock.changein_percent.charAt(0) === "+";
    return direction;
  };

});