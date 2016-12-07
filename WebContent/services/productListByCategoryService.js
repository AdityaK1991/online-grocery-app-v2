angular.module('onlineGroceryStoreApp')
	.factory('ProductListByCategoryService', ['$http', function($http){
		
		var promise;
		
		var factory = {};
		
//		$http.defaults.headers.post = "application/json";
		
		factory.getAllProductsByCategory = function(categoryName) {
			console.log("Product category service triggered");

			return $http.get('ProductServlet/getAllProductsByCategory' + "/" + categoryName);

		};
	    
	    return factory;
}]);	