angular.module('onlineGroceryStoreApp')
  .controller('AdminOrdersCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
  });