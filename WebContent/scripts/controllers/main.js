'use strict';

/**
 * @ngdoc function
 * @name onlineGroceryStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineGroceryStoreApp
 */
angular.module('onlineGroceryStoreApp')
  .controller('MainCtrl', ['ProductService', 'CartService', '$rootScope', '$scope', '$location', '$cookieStore',
                           function (ProductService, CartService, $rootScope, $scope, $location, $cookieStore) {

	$rootScope.isMenuVisible = true;
	$rootScope.isAdminMenuVisible = false;
	
    $scope.products = {};

    $scope.products.disableCartButton = false;
    
	var promise = ProductService.getAllProducts();
	
	promise.then(
		function(response) {
			console.log("All Products:" + response.data);
			
			if(response.data !== null) {
				$scope.products = response.data;
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
	
	$scope.displayProductInfo = function(productItem) {
		console.log("Send product info: " + productItem.prodName);
		
		ProductService.addProductInfoForDisplay(productItem);
	};
	
	$scope.addToCart = function(productItem) {

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
	
//	$scope.checkIfProductAlreadyInCart = function(prodId) {
//		
//	};
	
	
  }]);
