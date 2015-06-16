
var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddIdealGearRatio', {
    templateUrl: 'views/idealGearRatio.html',
    controller: 'idealGearRatioController'
      }).
      when('/ShowOrders', {
    templateUrl: 'views/gearRatioTable.html',
    controller: 'gearRatioTableController'
      }).
      otherwise({
    redirectTo: '/AddIdealGearRatio'
      });
}]);


sampleApp.controller('idealGearRatioController', function($scope) {
    
    $scope.message = 'calculating beep boop';
    
});


sampleApp.controller('gearRatioTableController', function($scope) {

    $scope.message = 'boop';

});
