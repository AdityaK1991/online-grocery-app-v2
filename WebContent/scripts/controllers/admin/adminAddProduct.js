angular.module('onlineGroceryStoreApp')
  .controller('AdminAddProductCtrl', ['ProductService', '$rootScope', '$scope', '$location',
                                      function (ProductService, $rootScope, $scope, $location) {
 
    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
    $scope.productStates = [];

    $scope.product = {};
    
    $scope.createProduct = function() {
    	console.log($scope.product);
    	var promise = ProductService.addProduct($scope.product);
    	
    	promise.then(function(response) {
    		if(response.status === 200) {
    			alert('Product added!');
    			$location.path('#/admin/products');
    		}
    	});
		
    };    
//    $scope.addStateForProduct = function($state) {
//    	if($scope.productStates.indexOf($state) === -1) {
//    		console.log($scope.productStates.indexOf($state));
//			$scope.productStates.push({
//	    		id: $scope.productStates.length+1,
//	    		state: $state
//    		});    	
//		} 
//    };


//    $scope.deleteStateForProduct = function($index) {
//    	$scope.productStates.splice($index, 1);
//    };
    
    
  }]);