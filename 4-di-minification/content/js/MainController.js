function MainController(a, b) {
  a.name = 'Todd';
}

//MainController.$inject = ['$scope','$rootScope'];

angular
  .module('app')
  .controller('MainController', [
    '$scope',
    '$rootScope',
    MainController
  ]);
