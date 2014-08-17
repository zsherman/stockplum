angular.module("app").config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/stocks/:stockSymbol', {
        templateUrl: 'stock.html',
        controller: 'StockCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});