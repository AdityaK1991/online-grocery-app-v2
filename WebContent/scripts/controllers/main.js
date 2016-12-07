'use strict';

/**
 * @ngdoc function
 * @name onlineGroceryStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineGroceryStoreApp
 */
angular.module('onlineGroceryStoreApp')
  .controller('MainCtrl', ['ProductService', '$rootScope', '$scope', 
                           function (ProductService, $rootScope, $scope) {

	$rootScope.isMenuVisible = true;
	$rootScope.isAdminMenuVisible = false;
	
    $scope.products = {};

	var promise = ProductService.getAllProducts();
	
	promise.then(
		function(response) {
			console.log(response.data);
						
			if(response.data !== null) {
				$scope.products = response.data;
				angular.forEach($scope.products in function(value, key) {
					console.log(key.prodName + ":" + value.prodName);
					$scope.products.push({
	   					 prodName  : value.prodName,
	   					 ProdPrice : value.ProdPrice,
	   					 ProdType : value.prodType
	   				 });
   			   });
			}
		}
	);
	
  }]);
