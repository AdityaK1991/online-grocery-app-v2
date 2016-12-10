angular.module('onlineGroceryStoreApp')
  .controller('CartItemsCtrl', [ 'CartService', 'ProductService', '$rootScope', '$scope', '$cookieStore',
                                 function (CartService, ProductService, $rootScope, $scope, $cookieStore) {

    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;

//    $scope.cartItems = ProductService.getCartItems();
    
    $scope.cartItems = $cookieStore.get('cartItems');
   
    console.log($scope.cartItems);
    
    var totalAmount = 0;
    
    $scope.qty = 1;
    
    
    
//    angular.forEach($scope.cartItems in function(value, key) {
//    	
//    });
    
    
    
	var promiseCartItems = CartService.getCartItems();
	
	var balance = $cookieStore.get("balance");
	
	promiseCartItems.then(
			function(response) {
				console.log("All Products in Cart:" + response.data);
				
				if(response.data !== null) {
					$scope.products = response.data;
					angular.forEach($scope.products in function(value, key) {
	//					console.log(key.prodName + ":" + value.prodName);
						balance = balance - value.ProdPrice;
						$scope.products.push({
		   					 prodName  : value.prodName,
		   					 ProdPrice : value.ProdPrice,
		   					 cartQuantity : value.cartQuantity,
		   				 });
	   			   });
				}
			}
		);  
	
	balance = balance - $scope.cartItems.length * 60;
	
	console.log("Customer balance: " + balance);
	$cookieStore.put("balance", balance);
	
	
//	angular.forEach($scope.products in function(value, key) {
//		ProductService.getAllProductsInCart(
//				JSON.stringify(
//						{'ProdId' : value.ProdId})
//				 );
//	   });
	
//	promiseAllProducts.then(
//			function(response) {					
//				if(response.status === 200) {
//					console.log("All Cart items displayed");
//				}
//			}
//		);      
	
	
    	
//    $scope.cartItems = [{id: 1, name: 'test1', qty:2, pricePerItem:50}, 
//    {id: 2, name: 'test1', qty:2, pricePerItem:50},
//    {id: 3, name: 'test1', qty:2, pricePerItem:50},
//    {id: 4, name: 'test1', qty:2, pricePerItem:50}];

	
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
    	$scope.cartItems[$index].isCartItemEditable = true;
    };

    $scope.saveEditedCartItem = function($index) {
    	// $scope.cartItems.id = $index;
    	$scope.cartItems[$index].isCartItemEditable = false;
    };

    $scope.deleteCartItem = function($index) {
    	$scope.cartItems.splice($index, 1);
    };

  }]);
