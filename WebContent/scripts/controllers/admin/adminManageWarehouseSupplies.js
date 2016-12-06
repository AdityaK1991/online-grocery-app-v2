angular.module('onlineGroceryStoreApp')
  .controller('AdminManageWarehouseSuppliesCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
  
  	$scope.products= [{
  		name:'Rice', size:150, qty:60, supplier:'S1', price:25
  	},
  	{
  		name:'Spices', size:100, qty:30, supplier:'S2', price:40
  	},
  	{
  		name:'Tomatoes', size:20, qty:100, supplier:'S3', price:15
  	}]

  	$scope.cartProducts = [];

  	$scope.addProductToCart = function($index) {
  		if($scope.cartProducts.indexOf($scope.cartProducts[$index]) == -1) {
	  		$scope.cartProducts.push({
	  			name: $scope.products[$index].name,
	  			supplier:$scope.products[$index].supplier,
	  			price:$scope.products[$index].price
	  		});

  		}
  	}
  });