angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', ['$rootScope', '$scope', '$location', 'LoginService', 
                             function ($rootScope, $scope,  $location, LoginService) {
    
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;

    $scope.register = {};
    
    $scope.reg = {};
    
//    var addressL1 = $scope.reg.addressL1;
//    var addressL2 = $scope.reg.addressL2;
//    
//    console.log(addressL1);
//    
//    var address = addressL1 + " " + addressL2;

//    $scope.register.streetAddress = address;
    
//    $scope.register.streetAddress = $scope.reg.addressL1;
    
    $scope.isCustomer = true;

    $scope.status;
    
    $scope.submitCustomerInfo = function() {
    	$scope.register.type = 'customer';

    	console.log($scope.register);
    	
    	var promise = LoginService.register($scope.register);
    	
    	promise.then(
			function(response) {
		    	console.log(response.status);
	    		$location.path('#/products');

		    	if(response.status === 200) {
    	    	} else {
    	    		alert('Registration error');
    	    	}
		});

    };

    $scope.updateUserRole = function(roleId) {
      if(roleId === 0) {
    	$scope.register.type = 'customer';
        $scope.isCustomer = true;
      } else if(roleId === 1) {
      	$scope.register.type = 'admin';
        $scope.isCustomer = false;
      }
    };


  }]);
