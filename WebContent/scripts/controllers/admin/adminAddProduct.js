angular.module('onlineGroceryStoreApp')
  .controller('AdminAddProductCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
    
    $scope.productStates = [];

    $scope.addStateForProduct = function($state) {
    	if($scope.productStates.indexOf($state) === -1) {
    		console.log($scope.productStates.indexOf($state));
			$scope.productStates.push({
	    		id: $scope.productStates.length+1,
	    		state: $state
    		});    	
		} 
    }


    $scope.deleteStateForProduct = function($index) {
    	$scope.productStates.splice($index, 1);
    }
  });