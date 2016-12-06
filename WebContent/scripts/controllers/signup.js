angular.module('onlineGroceryStoreApp')
  .controller('SignupCtrl', ['$rootScope', '$scope', 'LoginService', function ($rootScope, $scope, LoginService) {
    
    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;

    $scope.register = {};
    
    $scope.reg = {};
    
    $scope.register.streetAddress = $scope.reg.addressL1 + ", " + $scope.reg.addressL2;

    $scope.isCustomer = true;

    $scope.submitCustomerInfo = function() {
    	console.log($scope.register);
    	LoginService.register($scope.register);
    }

    $scope.updateUserRole = function(roleId) {
      if(roleId === 0) {
        $scope.isCustomer = true
      } else if(roleId === 1) {
        $scope.isCustomer = false;
      }
    }


  }]);
