angular.module('onlineGroceryStoreApp')
	.factory('CartService', ['$http', '$cookieStore', function($http, $cookieStore){
				
		var factory = {};
		
		//Cart Screen
		factory.addProductToCart = function(product) {
			
			var cartProduct = {
					"cId" : $cookieStore.get("user_id"), 
					"prodId" : product.prodId,
					"cartQuantity" : 1
					};
			
			console.log("Cart Item: " + JSON.stringify(cartProduct));

			
			return $http.post('CartServlet/addProduct', JSON.stringify(cartProduct));
		};
		
		
		factory.getCartItems = function() {
			return $http.post('CartServlet', {'cId' : $cookieStore.get("user_id")});
		};
		
		factory.getCartCount = function() {
			return $http.post('CartServlet/cartCount', {'cId' : $cookieStore.get("user_id")});
		};
	    
		
		factory.updateCartItemQuantity = function(product) {
			return $http.post('CartServlet/updateCartProductQuantity', 
					{'cId' : $cookieStore.get("user_id"), 
					 'prodId' : product.prodId,
					 'cartQuantity' : product.cartQuantity});
		};
		
	    return factory;
}]);	