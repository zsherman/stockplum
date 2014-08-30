angular.module("app").config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {
        templateUrl: 'dashboard.html',
      }).
      when('/stocks/:stockSymbol', {
        templateUrl: 'stock.html'
      }).
      otherwise({
        redirectTo: '/'
      });
});