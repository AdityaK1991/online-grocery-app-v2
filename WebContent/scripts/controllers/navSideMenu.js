angular.module('onlineGroceryStoreApp')
  .controller('NavSideMenuCtrl', ['ProductListByCategoryService', 'CartService', '$rootScope', '$scope', '$location', 
                                  function (ProductListByCategoryService, CartService, $rootScope, $scope, $location) {

    $rootScope.isMenuVisible = true;

//    $scope.items = $rootScope.cartItems;

    $scope.productList = {};

    $scope.cartCount = 0;

    $scope.showByCategory = function(category) {
    	console.log(category);
		$location.path('products/product-category' + '/' + category);
    	
    	var promise = ProductListByCategoryService.getAllProductsByCategory(category);
    	
    	promise.then(
    			function(response) {
    				if(response.data !== null) {
    					$scope.productList = response.data;
//    					console.log("Prod:" + $scope.productList.length);
    					
    					angular.forEach($scope.productList in function(value, key) {	
    						console.log(value.prodName);
//							$scope.productList.push({
//    		   					 prodName  : value.prodName,
//    		   					 ProdPrice : value.ProdPrice,
//    		   					 ProdType : value.prodType
//    		   				 });					
    	   			   });
    				}
    			});
    	
    };
    
	var promise = CartService.getCartCount();
	
	promise.then(function(response){
		console.log("Cart: " + response.data);
		$scope.cartCount = response.data;
	});
    
  }]);
