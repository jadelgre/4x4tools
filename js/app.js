
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
      otherwise({
    redirectTo: '/IdealGearRatio'
      });
}]);


sampleApp.controller('idealGearRatioController', function($scope) {
    
/*    $scope.message = "";
    $scope.originalRatio = "";
    $scope.originalTireSize = "";
    $scope.newTireSize = "";
    $scope.newRatio = "";*/

    $scope.calculateNewRatio = function() {
        $scope.newRatio = ($scope.newTireSize / $scope.originalTireSize) * $scope.originalRatio;
        if(isNaN($scope.newRatio) || null === $scope.newRatio) {
          $scope.message = "An error occurred. Please check your inputs!"
          $scope.newRatio = ""
        } else {
          $scope.newRatio = $scope.newRatio.toFixed(2); // convert to 2 decimal places
          $scope.message = "Your ideal gear ratio is " + $scope.newRatio;
        }
        
    }
});


sampleApp.controller('gearRatioTableController', function($scope) {

    $scope.message = 'boop';

});
