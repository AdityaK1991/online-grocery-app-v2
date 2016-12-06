angular.module('onlineGroceryStoreApp')
  .controller('ProductDetailCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pQty=10;

    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;

  });
