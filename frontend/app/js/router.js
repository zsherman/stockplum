angular.module("app").config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {
        templateUrl: 'dashboard.html',
        controller: 'DashCtrl'
      }).
      when('/stocks/:stockSymbol', {
        templateUrl: 'stock.html',
        controller: 'StockCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});