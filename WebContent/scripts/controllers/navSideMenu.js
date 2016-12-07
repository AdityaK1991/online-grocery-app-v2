angular.module('onlineGroceryStoreApp')
  .controller('NavSideMenuCtrl', ['ProductListByCategoryService', '$rootScope', '$scope', 
                                  function (ProductListByCategoryService, $rootScope, $scope) {

    $rootScope.isMenuVisible = true;

    $scope.items = $rootScope.cartItems;

    $scope.productCategoryList = {};
    // $scope.itemsCount = $scope.items.length;

    $scope.showByCategory = function(category) {
    	console.log(category);
    	
    	var promise = ProductListByCategoryService.getAllProductsByCategory(category);
    	
    	promise.then(
    			function(response) {
    				if(response.data !== null) {
    					$scope.productCategoryList = response.data;
    					angular.forEach($scope.productCategoryList in function(value, key) {
    						console.log(key.prodName + ":" + value.prodName);
    						$scope.products.push({
    		   					 prodName  : value.prodName,
    		   					 ProdPrice : value.ProdPrice,
    		   					 ProdType : value.prodType
    		   				 });
    	   			   });
    				}
    			});
    	
    };
  }]);
