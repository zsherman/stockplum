angular.module("app").controller('DashCtrl', function ($scope, $http, $routeParams, $resource) {

  var tracked = [];
  $.each($scope.tracked, function(i, v) {
    tracked.push(v.symbol);
  });

  // Get stock info
  $http({
      url:'/api/stock_list',
      method: 'GET',
      params: {
        symbols: tracked.join(),
      }
  }).then(function (response) {
    $scope.stockList = response.data;
    console.log(response.data);
  });

  // Get article list for stocks
  $http({
      url:'/api/articles',
      method: 'GET',
      params: {
        symbols: tracked.join(),
      }
  }).then(function (response) {
    $scope.articles = response.data.articles.article;
  });


});