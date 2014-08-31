angular.module("app").controller('DashCtrl', function ($scope, $http, $routeParams, $resource) {

  var tracked = [];
  $.each($scope.tracked, function(i, v) {
    tracked.push(v.symbol);
  });

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