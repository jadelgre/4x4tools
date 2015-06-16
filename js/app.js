
var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/IdealGearRatio', {
    templateUrl: 'views/idealGearRatio.html',
    controller: 'idealGearRatioController'
      }).
      when('/GearRatioTable', {
    templateUrl: 'views/gearRatioTable.html',
    controller: 'gearRatioTableController'
      }).
      when('/MetricTireInches', {
    templateUrl: 'views/metricTireInches.html',
    controller: 'metricTireInchesController'
      }).
      otherwise({
    redirectTo: '/IdealGearRatio'
      });
}]);


sampleApp.controller('idealGearRatioController', function($scope) {
    
    $scope.calculateNewRatio = function() {
      if($scope.originalRatio > 0 && $scope.originalTireSize > 0 && $scope.newTireSize > 0) {
        $scope.newRatio = ($scope.newTireSize / $scope.originalTireSize) * $scope.originalRatio;
        if(isNaN($scope.newRatio) || null === $scope.newRatio) {
          $scope.message = "An error occurred. Please check your inputs!"
          $scope.newRatio = ""
        } else {
          $scope.newRatio = $scope.newRatio.toFixed(2); // convert to 2 decimal places
          $scope.message = "Your ideal gear ratio is " + $scope.newRatio;
        }
      }
    }
});


sampleApp.controller('gearRatioTableController', function($scope) {

    $scope.message = 'boop';

});

sampleApp.controller('metricTireInchesController', function($scope) {
    $scope.calculateTireSize = function() {
      if($scope.ratio > 0 && $scope.width > 0 && $scope.rim > 0) {
        $scope.tireSize = ($scope.width * ($scope.ratio / 100) * 2 / 25.4) + +$scope.rim;
        if(isNaN($scope.tireSize) || null === $scope.tireSize) {
          $scope.message = "An error occurred. Please check your inputs!"
          $scope.tireSize = ""
        } else {
          $scope.tireSize = $scope.tireSize.toFixed(2); // convert to 2 decimal places
          $scope.message = "The tire is " + $scope.tireSize +"\" tall";
        }
    } else {
      $scope.message = ""
    }
    }
});
