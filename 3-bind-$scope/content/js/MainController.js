function MainController($scope) {
  $scope.name = 'Todd';
  $scope.likes = ['pizza', 'coke'];
}

angular
  .module('app')
  .controller('MainController', MainController);
