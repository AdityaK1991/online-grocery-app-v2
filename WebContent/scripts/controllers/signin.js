angular.module('onlineGroceryStoreApp')
  .controller('SigninCtrl', [ 'LoginService', '$rootScope', '$scope', '$location', '$cookieStore', 
                              function (LoginService, $rootScope, $scope, $location, $cookieStore) {
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;
    
    $scope.signin = {};
    
    $scope.login = function() {
       var promise = LoginService.login($scope.signin);
       
       promise.then(
    		   function(response) {
    			   console.log(response.data);
    			   
    			   var customerInfo = JSON.parse(response.data);
    			   console.log("Response: " + customerInfo);
    			   $cookieStore.put("user_id", customerInfo.CustId);
				   $cookieStore.put("state", customerInfo.State);
				   $cookieStore.put("balance", 500);

    				   
    				   console.log("sdfsdfsdfsfsdf: " + $cookieStore.get("user_id") + " : " + $cookieStore.get("state"));
    			   
    			   
    			   if(response.status === 200) {
    				   $location.path('#/main');
    				   console.log($cookieStore.get("user_id"));
    			   } else {
    				   alert('Please check your credentials and try again!');
    			   }
    		   });
    };
    
  }]);
