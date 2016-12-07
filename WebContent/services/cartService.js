angular.module('onlineGroceryStoreApp')
	.factory('CartService', ['$http', '$cookieStore', function($http, $cookieStore){
				
		var factory = {};
		
		//Cart Screen
		factory.addProductToCart = function(product) {
			
			var cartProduct = {
					"custId" : $cookieStore.get("userId"), 
					"prodId" : product.prodId,
					"cartQuantity" : 1
					};
			
			console.log("Cart Item: " + JSON.stringify(cartProduct));

			
			return $http.post('CartServlet', JSON.stringify(cartProduct));
		};
		
		var params = {
				'custId' : $cookieStore.get("userId")		
		};
		
		var custObj = {
				'custObj' : params
		};
		
		factory.getCartCount = function() {
			return $http.post('CartServlet/cartCount', params);
		};
	    
	    return factory;
}]);	