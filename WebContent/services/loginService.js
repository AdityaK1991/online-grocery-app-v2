angular.module('onlineGroceryStoreApp')
	.factory('LoginService', ['$http', function($http){
		
		var promise;
		
		var factory = {};
		
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
		
	    
	    return factory;
}]);	