angular.module('onlineGroceryStoreApp')
  .controller('CartItemsCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;


    $scope.cartItems = [{id: 1, name: 'test1', qty:2, pricePerItem:50}, 
    {id: 2, name: 'test1', qty:2, pricePerItem:50},
    {id: 3, name: 'test1', qty:2, pricePerItem:50},
    {id: 4, name: 'test1', qty:2, pricePerItem:50}];

    $scope.cartItemsCopy = [];

    angular.forEach($scope.cartItems, function(value, key) {
    	$scope.cartItemsCopy.push({
    		id: value.id,
    		isCartItemEditable: false
    	});
    });
	// $scope.isCartItemEditable = false;

    $scope.makeCartItemEditable = function($index) {
    	// $scope.cartItems.id = $index;
    	$scope.cartItemsCopy[$index].isCartItemEditable = true;
    };

    $scope.saveEditedCartItem = function($index) {
    	// $scope.cartItems.id = $index;
    	$scope.cartItemsCopy[$index].isCartItemEditable = false;
    }

    $scope.deleteCartItem = function($index) {
    	$scope.cartItems.splice($index, 1);
    }

  });
