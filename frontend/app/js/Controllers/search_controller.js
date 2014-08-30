angular.module("app").controller('SearchCtrl', function ($scope, $http, $routeParams, $resource, $location) {

  $scope.stockSearch = function() {
    console.log("Searched");
    $location.path('/stocks/'+ $scope.searchTerm);
  };

});