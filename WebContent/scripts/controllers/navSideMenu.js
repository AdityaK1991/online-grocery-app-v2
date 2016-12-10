angular.module('onlineGroceryStoreApp')
  .controller('NavSideMenuCtrl', ['ProductListByCategoryService', 'CartService', '$rootScope', '$scope', '$location', '$cookieStore', 
                                  function (ProductListByCategoryService, CartService, $rootScope, $scope, $location, $cookieStore) {

    $rootScope.isMenuVisible = true;

//    $scope.items = $rootScope.cartItems;

//     var vegetable = [{prodName: 'carrot', ProdPrice: 2},
//                       {prodName: 'Bell Peppers', ProdPrice: 25},
//                       {prodName: 'brinjal', ProdPrice: 15},
//                       {prodName: 'cauliflower', ProdPrice: 15},
//                       {prodName: 'brocoli', ProdPrice: 15}];
//
//     var beverages = [{prodName: 'Coke Cola', ProdPrice: 7},
//                      {prodName: 'Pepsi', ProdPrice: 7}];
//     
//     var fruits = [{prodName: 'apple', ProdPrice: 2},
//                   {prodName: 'Pomogranate', ProdPrice: 25}];
     
    $scope.productList = {};
    $scope.cartCount = 0;
    $scope.showByCategory = function(category) {
    	console.log(category);
		$scope.type = category;
		console.log("type: " + $scope.type);
    	var promise = ProductListByCategoryService.getAllProductsByCategory(category);
    	
    	promise.then(
    			function(response) {
    				if(response.data !== null) {
    					angular.forEach($scope.productList in function(value, key) {	
    						console.log(value.prodName);
							$scope.productList.push({
    		   					 prodName  : value.prodName,
    		   					 ProdPrice : value.ProdPrice,
    		   					 ProdType : value.prodType
    		   				 });					
    	   			   });
    				}
    			});
    	
    };
    
	var promise = CartService.getCartCount();
	
	promise.then(function(response){
		console.log("Cart: " + response.data);
		$scope.cartCount = response.data;
	});
    
	$scope.logoutSession = function() {
		console.log("Cookie:" + $cookieStore.get('user_id'));
		$cookieStore.remove('user_id');
		$cookieStore.remove('state');
		$cookieStore.remove('cartItems');

	};
  }]);
