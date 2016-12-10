angular.module('onlineGroceryStoreApp')
  .controller('OrderPaymentCtrl', ['LoginService', '$rootScope', '$scope', '$cookieStore', '$location',
                                   function (LoginService, $rootScope, $scope, $cookieStore, $location) {

    $rootScope.isMenuVisible = true;
    
    $rootScope.isAdminMenuVisible = false;

    var customer = $cookieStore.get('userDetails')
    
    $scope.cart = $cookieStore.get('cartItems');

    $scope.count = $scope.cart.length;
    
    var orderTotal = ($scope.count * 94 ) + ($scope.count * 94 * 0.15) + ($scope.count * 94 * 0.10);
    
    console.log(orderTotal);
    
    $cookieStore.put('orderTotal', orderTotal);
//    $scope.fName = customer.fname;
//    $scope.lName = customer.lname;
    $scope.addressL1 = $cookieStore.get('address');
    $scope.city = $cookieStore.get('city');
    $scope.state = $cookieStore.get('state');
    $scope.zip = $cookieStore.get('zip');
    
    
    $scope.paymentMethod = $cookieStore.get('paymentMethods');
    
    console.log($scope.paymentMethod);
//    $scope.cards = [
//                    {cardNumber : 1234567890123456, cardMM : 11, cardYYYY : 2018}, 
//                    {cardNumber : 9876543210987654, cardMM: 12, cardYYYY : 2019}
//                    ];
    
//    $scope.cards = $cookieStore.get("paymentMethods");
//    var cardInfo = LoginService.getCardInfoToDisplay();
    
//	$scope.cards.push(cardInfo);
    
    var balance = $cookieStore.get('balance');
    	console.log("order balance: " + balance);
    	
    $scope.placeOrder = function() {
    	
    	if(balance < 0) {
    		alert('You do not have enough credit!')
    	} else {
        	alert('Order placed Successfully!');
    		$location.path('#/main');
    	}
//		$cookieStore.remove('cartItems');
    };
	
    	
  }]);