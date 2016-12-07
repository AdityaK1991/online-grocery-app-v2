angular.module('onlineGroceryStoreApp')
	.factory('ProductListByCategoryService', ['$http', function($http){
		
		var promise;
		
		var factory = {};
		
//		$http.defaults.headers.post = "application/json";
		
		factory.getAllProductsByCategory = function(categoryName) {
			console.log("Product category service triggered");

			var params = {
					'prodType' : categoryName		
			};
			
			return $http.post('ProductServlet/getAllProductsByCategory', params);

		};
	    
	    return factory;
}]);	