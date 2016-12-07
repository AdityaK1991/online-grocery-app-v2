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
    			   console.log(response.status);
    			   
    			   $cookieStore.put("userId", response.data);
    			   
    			   if(response.status === 200) {
    				   $location.path('#/main');
    				   console.log($cookieStore.get("userId"));
    			   } else {
    				   alert('Please check your credentials and try again!');
    			   }
    		   });
    };
    
  }]);
