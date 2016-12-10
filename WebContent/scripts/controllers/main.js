'use strict';

/**
 * @ngdoc function
 * @name onlineGroceryStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineGroceryStoreApp
 */
angular.module('onlineGroceryStoreApp')
  .controller('MainCtrl', ['ProductService', 'LoginService', 'CartService', '$rootScope', '$scope', '$location', '$cookieStore',
                           function (ProductService, LoginService, CartService, $rootScope, $scope, $location, $cookieStore) {

	$rootScope.isMenuVisible = true;
	$rootScope.isAdminMenuVisible = false;
	
    $scope.products = {};

    $scope.products.disableCartButton = false;
    
//    var promiseState = LoginService.getCustomerState();
//    
//    promiseState.then(
//    		function(response) {
//    			if(response.data !== null) {
//    				$cookieStore.put('state', response.data);
//    				console.log("State :" + $cookieStore.get('state'));
//    				
//    				
//    			}
//    		});
    
    
    
	
	$scope.displayProductInfo = function(productItem) {
		console.log("Send product info: " + productItem.prodName);
		
		ProductService.addProductInfoForDisplay(productItem);
	};
	
	$scope.addToCart = function(productItem) {

		ProductService.addProductToCart(productItem);
		
		console.log(productItem);
		var promise = CartService.addProductToCart(productItem);
		
		promise.then(function(response){
			if(response.status === 200) {
				$cookieStore.put(productItem.prodId, true);
				productItem.disableCartButton = $cookieStore.get(productItem.prodId);

				alert('Product added to cart!');
			} else {
				alert('Could not add product to cart!');
			}
		});
	};
	
	
	var customerState = $cookieStore.get('state');
    console.log("Customer state:" + customerState);
    
	var promise = ProductService.getAllProducts(customerState);
	
	promise.then(
		function(response) {
			console.log("All Products:" + response.data);
			
			if(response.data !== null) {
				$scope.products = response.data;
				console.log("Main :" + $scope.products);

				angular.forEach($scope.products in function(value, key) {
//					console.log(key.prodName + ":" + value.prodName);
					$scope.products.push({
	   					 prodName  : value.prodName,
	   					 ProdPrice : value.ProdPrice,
	   					 ProdType : value.prodType,
	   					 disableCartButton : $cookieStore.get(value.prodId)
	   				 });
   			   });
			}
		}
	);
	
//	$scope.checkIfProductAlreadyInCart = function(prodId) {
//		
//	};
	
	
  }]);
