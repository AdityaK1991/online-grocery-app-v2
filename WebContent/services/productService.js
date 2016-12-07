angular.module('onlineGroceryStoreApp')
	.factory('ProductService', ['$http', function($http){
		
		var promise;
		
		var factory = {};
		
//		$http.defaults.headers.post = "application/json";
		
		
		factory.getAllProducts = function() {
			console.log("Product service triggered");

			return $http.get('ProductServlet/getAllProducts');

		};
	    
	    return factory;
}]);	