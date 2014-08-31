angular.module("app").controller('StockCtrl', function ($scope, $http, $routeParams, $resource, Stock) {

  var symbol = $routeParams.stockSymbol;

  // Get stock info from Yahoo
  var stock = $http.get('/api/stocks/symbol/' + symbol).success(function(data) {
    $scope.stock = data;
    console.log(data);
  });

  // Set Background
  $scope.upOrDown = function(stock) {
    var direction = stock.changein_percent.charAt(0) === "+";
    return direction;
  };

  // Get articles from TradeKing
  $http({
      url:'/api/articles',
      method: 'GET',
      params: {
        symbols: symbol,
      }
  }).then(function (response) {
    $scope.articles = response.data.articles.article;
  });


  // Get chart from TradeKing
  var chart = $http.get('/api/stocks/chart/' + symbol).success(function(data) {
    console.log(data);

    var prices = [];

    // Change to vanilla for-loop for speed boost
    $.each(data.quotes.quote, function(i,v) {
      var point = [];
      point.push(parseFloat(moment.utc(v.datetime).unix() * 1000));
      point.push(parseFloat(v.last));
      prices.push(point);
    });

    $scope.chart = prices;
    console.log(prices);


    // Build stock chart
    $('.chart').highcharts('StockChart', {
      rangeSelector : {
          selected : 1,
          inputEnabled: false, //$('.chart').width() > 480
          enabled: false
      },

      title : {
          enabled: false
      },

      chart: {
        backgroundColor: 'transparent',
      },

      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      },

      subtitle: {
        enabled: false
      },

      tooltip: {
        backgroundColor: {},
        borderColor: 'gray',
        borderWidth: 1,
        crosshairs: false
      },

      scrollbar: {
        enabled: false
      },

      navigator: {
        enabled: false
      },

      yAxis: {
          gridLineColor: 'transparent',
          labels : {
            enabled: false
          }
      },

      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
          enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
      },

      plotOptions : {
        area: {
          color: '#ffffff',
          lineColor: '#ffffff',
        },

        areaspline: {
          fillOpacity: 0.5
        },

        series: {
          color: "#ffffff"
        }
      },

      series : [{
          name : symbol,
          data : $scope.chart,
          tooltip: {
            valueDecimals: 2
          }
      }]
    });
  });

});