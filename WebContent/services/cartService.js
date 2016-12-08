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

			
			return $http.post('CartServlet/addProduct', JSON.stringify(cartProduct));
		};
		
		
		factory.getCartItems = function() {
			return $http.post('CartServlet', {'custId' : $cookieStore.get("userId")});
		};
		
		factory.getCartCount = function() {
			return $http.post('CartServlet/cartCount', {'custId' : $cookieStore.get("userId")});
		};
	    
		
		factory.updateCartItemQuantity = function(product) {
			return $http.post('CartServlet/updateCartProductQuantity', 
					{'custId' : $cookieStore.get("userId"), 
					 'prodId' : product.prodId,
					 'cartQuantity' : product.cartQuantity});
		};
		
	    return factory;
}]);	