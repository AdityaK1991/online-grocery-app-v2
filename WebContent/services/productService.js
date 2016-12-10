angular.module('onlineGroceryStoreApp')
	.factory('ProductService', ['$http', '$cookieStore', 
	                            function($http, $cookieStore){
				
		var factory = {};
		
		var cartItems = [];
//		$http.defaults.headers.post = "application/json";
		
		var productItem = {};
		
		factory.getAllProducts = function(customerState) {
			console.log("Product service triggered: " + $cookieStore.get('state'));

			return $http.post('ProductServlet/getAllProducts', JSON.stringify({state : $cookieStore.get('state')}));

		};
		
		factory.getAllProductsInCart = function(cartData) {

			return $http.post('ProductServlet/getAllProductsInCustomerCart', JSON.stringify(cartData));

		};
		
		factory.addProduct = function(product) {
			return $http.post('ProductServlet/addProduct', JSON.stringify(product));
		};
		
		factory.addProductToCart = function(product) {
			cartItems.push(product);
			
			$cookieStore.put("cartItems", cartItems);
		};
		
		factory.getCartItems = function(product) {
			return cartItems;
		};
		
		//Product Info Screen
		factory.addProductInfoForDisplay = function(product) {
			productItem = product;
		};
		
		factory.updateProductInfo = function(product) {
			return $http.post('ProductServlet/updateProductInfo', JSON.stringify(product));
		};
		
		factory.getProductInfoForDisplay = function() {
			return productItem;			
		};
		
	    return factory;
}]);	