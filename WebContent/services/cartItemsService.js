angular.module('onlineGroceryStoreApp')
	.factory('cartItemsService', function() {

		var items = {};

		return {
			getItemsCount: function() {

				if(items !== null) {
					return items.length;
				}

				return 0;
			},

			setItemsCount: function(cartItems) {
				items = cartItems;
			}
		};
	});