angular.module('onlineGroceryStoreApp')
  .controller('ProductListByCategoryCtrl', ['ProductListByCategoryService', 'CartService', '$rootScope', '$scope', '$location', '$cookieStore', '$routeParams', 
                                  function (ProductListByCategoryService, CartService, $rootScope, $scope, $location, $cookieStore, $routeParams) {

	  $rootScope.isMenuVisible = true;

	  	$scope.productList = {};
	    $scope.cartCount = 0;
	    var category = $routeParams.category;
	    console.log("Category:" + category)
	   
	    $scope.type = category;
	    
	    	var promise = ProductListByCategoryService.getAllProductsByCategory(category);
	    	
	    	promise.then(
	    			function(response) {
	    				if(response.data !== null) {
//	    					$location.path('/products/product-category' + '/' + category);
	    					$scope.productList = response.data;
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
	    	  
  }]);