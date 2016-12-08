angular.module('onlineGroceryStoreApp')
  .controller('AdminOrdersCtrl', ['$rootScope', '$scope', '$cookieStore',
                                  function ($rootScope, $scope, $cookieStore) {

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    

    $scope.cartItems = $cookieStore.get('cartItems');
    
    $scope.fname = $cookieStore.get('fname');
    $scope.lname = $cookieStore.get('lname');
    $scope.address = $cookieStore.get('address');    
    $scope.address = $cookieStore.get('address');
    $scope.city = $cookieStore.get('city');
    $scope.state = $cookieStore.get('state');
    $scope.zip = $cookieStore.get('zip');
    
  }]);