angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', ['$rootScope', '$scope', '$location', 'LoginService', 
                             function ($rootScope, $scope,  $location, LoginService) {
    
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;

    $scope.register = {};
    
    $scope.reg = {};
    
    var addressL1 = $scope.reg.addressL1;
    var addressL2 = $scope.addressL2;
    
    var address = addressL1 + ", " + addressL2;

    $scope.register.streetAddress = address;
    
    $scope.isCustomer = true;

    $scope.status;
    
    $scope.submitCustomerInfo = function() {
    	console.log($scope.register);
    	
    	var promise = LoginService.register($scope.register);
    	
    	promise.then(
			function(response) {
		    	console.log(response.status);

		    	if(response.status === 200) {
    	    		$location.path('#/products');
    	    	} else {
    	    		alert('Registration error');
    	    	}
		});

    };

    $scope.updateUserRole = function(roleId) {
      if(roleId === 0) {
        $scope.isCustomer = true;
      } else if(roleId === 1) {
        $scope.isCustomer = false;
      }
    };


  }]);
