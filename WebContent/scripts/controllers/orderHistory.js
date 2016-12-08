angular.module('onlineGroceryStoreApp')
  .controller('OrderHistoryCtrl', ['$rootScope', '$scope', '$cookieStore',
                                   function ($rootScope, $scope, $cookieStore) {
 

    $rootScope.isMenuVisible = true;
    
    $rootScope.isAdminMenuVisible = false;

    $scope.cartItems = $cookieStore.get('cartItems');
    
    $scope.total = $cookieStore.get('orderTotal');

    console.log($scope.cartItems);
    
  }]);
