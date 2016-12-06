angular.module('onlineGroceryStoreApp')
  .controller('SigninCtrl', [ 'LoginService', '$rootScope', '$scope', '$location', 
                              function (LoginService, $rootScope, $scope, $location) {
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;

    $scope.signin = {};
    
    $scope.login = function() {
       var promise = LoginService.login($scope.signin);
       
       promise.then(
    		   function(response) {
    			   console.log(response.status);
    			   if(response.status === 200) {
    				   $location.path('#/main');
    			   } else {
    				   alert('Please check your credentials and try again!');
    			   }
    		   });
    };
    
  }]);
