angular.module('onlineGroceryStoreApp')
	.factory('LoginService', ['$http', '$cookieStore',
	                          function($http, $cookieStore){
		
		var promise;
		
		var factory = {};
		
		var customer = {};
		
		var cards = {};
		
//		$http.defaults.headers.post = "application/json";
		
		
		factory.register = function($registrationData) {
			console.log("Register service triggered");

			return $http.post('RegisterServlet', JSON.stringify($registrationData));
			
//			$http({
//		              method : 'POST',
//		              data: JSON.stringify($registrationData),
//		              //url : 'ConnectToDatabase'
//		              url : 'RegisterServlet',
//		              contentType:'application/json'
//		      }).then(function (response) {
//		    	  console.log(response.data);
//		    	  
//		    	  return response.data;
//		      })
//		      .success(function(data, status, headers, config) {
//		              console.log("Registration Successful");
//		      }).error(function(data, status, headers, config) {
//		              // called asynchronously if an error occurs
//		              // or server returns response with an error status.
//	              console.log("Registration Error");
//
//		      }
//		    )

		};
	    
	    factory.login = function($loginCredentials) {
			console.log("Login service triggered");
			
			return $http.post('LoginServlet', JSON.stringify($loginCredentials));
			
	    };
		
	    factory.saveCustomerInfoToDisplay = function(customerInfo) {
	    	customer = customerInfo;
	    };
	    
	    factory.getCustomerInfoToDisplay = function() {
	    	return customer;
	    };
	    
	    factory.saveCardInfoToDisplay = function(cardInfo) {
	    	cards = cardInfo;
	    };
	    
	    factory.getCardInfoToDisplay = function() {
	    	return cards;
	    };
	    
	    factory.getAccountDetails = function() {
			console.log("Account details");
			
			return $http.post('LoginServlet/getUserDetails', JSON.stringify({'cId' : $cookieStore.get('userId')}));
			
	    };
	    
	    return factory;
}]);	