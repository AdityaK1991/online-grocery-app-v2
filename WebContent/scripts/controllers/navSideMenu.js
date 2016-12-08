angular.module('onlineGroceryStoreApp')
  .controller('NavSideMenuCtrl', ['ProductListByCategoryService', 'CartService', '$rootScope', '$scope', '$location', '$cookieStore', 
                                  function (ProductListByCategoryService, CartService, $rootScope, $scope, $location, $cookieStore) {

    $rootScope.isMenuVisible = true;

//    $scope.items = $rootScope.cartItems;

     $scope.productList = [{prodName: 'carrot', ProdPrice: 2},
                       {prodName: 'Bell Peppers', ProdPrice: 25},
                       {prodName: 'brinjal', ProdPrice: 15},
                       {prodName: 'cauliflower', ProdPrice: 15},
                       {prodName: 'brocoli', ProdPrice: 15}];

     var beverages = [{prodName: 'Coke Cola', ProdPrice: 7},
                      {prodName: 'Pepsi', ProdPrice: 7}];
     
     var fruits = [{prodName: 'apple', ProdPrice: 2},
                   {prodName: 'Pomogranate', ProdPrice: 25}];
     
     $scope.productList = [];
    $scope.cartCount = 0;

    $scope.showByCategory = function(category) {
    	console.log(category);
		$location.path('products/product-category' + '/' + category);
    	
//    	var promise = ProductListByCategoryService.getAllProductsByCategory(category);
//    	
//    	if(category === 'vegetable') {
//    		$scope.productList.push(vegetables);
//    	} else if (category === 'Beverages') {
//    		$scope.productList = beverages;
//    	}
//    	
//    	console.log("ProdName:" + $scope.productList[0].prodName);
//    	promise.then(
//    			function(response) {
////    				if(response.data !== null) {
//    					$scope.productList = response.data;
//    					
//    					for(var i=0; i<response.data; i++) {
//        					console.log("Prod:" + response.data[i].prodName);
//
//    						$scope.productList[i].prodName = response.data[i].prodName;
//    						$scope.productList[i].ProdPrice = response.data[i].ProdPrice;
//
//    					}
//    					
////    					angular.forEach($scope.productList in function(value, key) {	
////    						console.log(value.prodName);
////							$scope.productList.push({
////    		   					 prodName  : value.prodName,
////    		   					 ProdPrice : value.ProdPrice,
////    		   					 ProdType : value.prodType
////    		   				 });					
////    	   			   });
////    				}
//    			});
    	
    };
    
	var promise = CartService.getCartCount();
	
	promise.then(function(response){
		console.log("Cart: " + response.data);
		$scope.cartCount = response.data;
	});
    
	$scope.logoutSession = function() {
		console.log("Cookie:" + $cookieStore.get('userId'));
		$cookieStore.remove('userId');
		$cookieStore.remove('cartItems');

	};
  }]);
