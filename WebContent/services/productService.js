angular.module('onlineGroceryStoreApp')
	.factory('ProductService', ['$http', function($http){
				
		var factory = {};
		
//		$http.defaults.headers.post = "application/json";
		
		var productItem = {};
		
		factory.getAllProducts = function() {
			console.log("Product service triggered");

			return $http.post('ProductServlet/getAllProducts');

		};
		
		
		//Product Info Screen
		factory.addProductInfoForDisplay = function(product) {
			productItem = product;
		};
		
		factory.getProductInfoForDisplay = function() {
			return productItem;			
		};
		
	    return factory;
}]);	