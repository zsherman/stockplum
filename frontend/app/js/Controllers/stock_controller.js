angular.module("app").controller('StockCtrl', function ($scope, $http, $routeParams, $resource, Stock) {
  var symbol = $routeParams.stockSymbol;
  var stock = $http.get('/api/stocks/symbol/' + symbol).success(function(data) {
    $scope.stock = data;
    console.log(data);
  });

  // Should happen on success of yahoo stock call
  // Timeout for now
  setTimeout(function() {

  var chart = $http.get('/api/stocks/chart/' + symbol).success(function(data) {
    console.log(data);

    var prices = [];

    $.each(data.quotes.quote, function(i,v) {
      var point = [];
      point.push(parseFloat(moment.utc(v.datetime).unix() * 1000));
      point.push(parseFloat(v.last));
      prices.push(point); // might need to wrap in brackets
    });

    $scope.chart = prices;
    console.log(prices);

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
        backgroundColor: '#E84F88',
      },

      legend: {
        enabled: false
      },

      subtitle: {
        enabled: false
      },

      tooltip: {
        backgroundColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'white'],
                [1, '#EEE']
            ]
        },
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
          gridLineColor: '#E84F88',
          labels : {
            enabled: false
          }
      },

      plotOptions : {
        area: {
          color: '#ffffff',
          lineColor: '#ffffff',
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
}, 2500);

});