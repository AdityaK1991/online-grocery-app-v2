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
  		name:'Apple', size:150, qty:60, supplier:'S1', price:25
  	},
  	{
  		name:'Apple pie', size:100, qty:30, supplier:'S2', price:40
  	},
  	{
  		name:'Tomatoes', size:20, qty:100, supplier:'S3', price:60
  	},
  	{
  		name:'Coke', size:22, qty:150, supplier:'S3', price:55
  	},
  	{
  		name:'Carrot', size:36, qty:200, supplier:'S3', price:60
  	},
  	{
  		name:'Tomatoes', size:28, qty:220, supplier:'S3', price:65
  	},
  	{
  		name:'Beans', size:25, qty:250, supplier:'S3', price:70
  	}];

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