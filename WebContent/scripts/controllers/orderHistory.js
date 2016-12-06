angular.module('onlineGroceryStoreApp')
  .controller('OrderHistoryCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = true;
    
    $rootScope.isAdminMenuVisible = false;

  });
