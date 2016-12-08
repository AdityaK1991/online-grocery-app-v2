angular.module('onlineGroceryStoreApp')
  .controller('AdminManageProductCtrl', ['ProductService', '$rootScope', '$scope',
                                         function (ProductService, $rootScope, $scope) {

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
    $scope.isProductEditable = false;

    $scope.product = ProductService.getProductInfoForDisplay();

   
    $scope.enableProductEditor = function() {
	    $scope.isProductEditable = true;    	
    };

    $scope.updateProductInfo = function() {
    	
    	console.log($scope.product);
    	
	    $scope.isProductEditable = false;
	    
	    var promise = ProductService.updateProductInfo($scope.product);
	    
	    promise.then(
	    		function(response) {
	    			console.log("All Products:" + response.data);
	    			
	    			if(response.status === 200) {
	    				alert('Product updated!');
	    			}
	    		}
	    	);
	    
    };

  }]);