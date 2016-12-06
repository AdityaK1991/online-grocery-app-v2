angular.module('onlineGroceryStoreApp')
	.factory('LoginService', ['$http', function($http){
		
		var factory = {};
		
//		var baseUrl = "http://localhost/OnlineGrocApp/#/";
		
		factory.register = function($registrationData) {
			console.log("in login-->",$registrationData);
			$http({
	              method : 'POST',
	              data: JSON.stringify($registrationData),
	              //url : 'ConnectToDatabase'
	              url : 'RegisterServlet',
	              contentType:'application/json'
	      }).success(function(data, status, headers, config) {
	              console.log("Registration Successful");
	      }).error(function(data, status, headers, config) {
	              // called asynchronously if an error occurs
	              // or server returns response with an error status.
              console.log("Registration Error");

	      }
	    )};
	    
	    return factory;
}]);	