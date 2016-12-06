angular.module('onlineGroceryStoreApp')
  .controller('NavSideMenuCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $rootScope.isMenuVisible = false;

    $scope.items = $rootScope.cartItems;

    // $scope.itemsCount = $scope.items.length;

  }]);
