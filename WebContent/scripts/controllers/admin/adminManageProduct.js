angular.module('onlineGroceryStoreApp')
  .controller('AdminManageProductCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
    $scope.isProductEditable = false;

    $scope.enableProductEditor = function() {
	    $scope.isProductEditable = true;    	
    }

    $scope.saveProductInfo = function() {
	    $scope.isProductEditable = false;
    }

  });