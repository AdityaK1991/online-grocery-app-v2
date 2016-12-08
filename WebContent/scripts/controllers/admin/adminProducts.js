angular.module('onlineGroceryStoreApp')
  .controller('AdminProductsCtrl',['ProductService', '$rootScope', '$scope',
                                   function (ProductService, $rootScope, $scope) {

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
    var promise = ProductService.getAllProducts();
	
	promise.then(
		function(response) {
			console.log("Admin Products:" + response.data);
			
			if(response.data !== null) {
				$scope.products = response.data;
				angular.forEach($scope.products in function(value, key) {
//					console.log(key.prodName + ":" + value.prodName);
					$scope.products.push({
	   					 prodName  : value.prodName,
	   					 ProdPrice : value.ProdPrice,
	   					 ProdType : value.prodType,
	   				 });
   			   });
			}
		}
	);
	
	$scope.displayProductInfo = function(productItem) {
		
		ProductService.addProductInfoForDisplay(productItem);
	};
    
  }]);