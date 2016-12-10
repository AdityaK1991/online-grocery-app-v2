angular.module('onlineGroceryStoreApp')
  .controller('AdminManageWarehouseSuppliesCtrl', ['$rootScope', '$scope', '$location',
                                                 function ($rootScope, $scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;

    $rootScope.isAdminMenuVisible = true;
  
  	$scope.products= [{
  		name:'Apple', size:40, qty:20, supplier:'S1', price:25
  	},
  	{
  		name:'Apple pie', size:30, qty:40, supplier:'S2', price:40
  	},
  	{
  		name:'Tomatoes', size:30, qty:40, supplier:'S3', price:60
  	},
  	{
  		name:'Coke', size:40, qty:20, supplier:'S3', price:12
  	},
  	{
  		name:'Sprite', size:30, qty:40, supplier:'S3', price:8
  	},
  	{
  		name:'Carrot', size:40, qty:20, supplier:'S3', price:60
  	},
  	{
  		name:'Tomatoes', size:30, qty:20, supplier:'S3', price:65
  	},
  	{
  		name:'Beans', size:40, qty:40, supplier:'S3', price:70
  	}];

  	$scope.warehouseProductsTotalSize = $scope.products.length * 45 * 30;
  	
  	$scope.warehouseCapacity = 12000;
  	
  	$scope.warehouseCurrentCapacity = $scope.warehouseCapacity - $scope.warehouseProductsTotalSize;
  	
  	$scope.cartProducts = [];

  	$scope.addProductToCart = function($index) {
  		if($scope.cartProducts.indexOf($scope.cartProducts[$index]) == -1) {
	  		$scope.cartProducts.push({
	  			name: $scope.products[$index].name,
	  			supplier:$scope.products[$index].supplier,
	  			price:$scope.products[$index].price
	  		});

  		}
  	};
  	
  	$scope.supplier1 = {qty : 6};
  	$scope.supplier2 = {qty : 8};
  	$scope.supplier3 = {qty : 10};
  	
  	
  	$scope.checkSupplierQty = function() {
  		console.log($scope.cartProducts.length);
  		if($scope.cartProducts.length > 3) {
  			alert("Not enough quantity with Supplier!");
  		} else {
  			$location.path('#/admin/products');
  			alert("Order placed successfully!");
  		}
  	};
  	
  	$scope.removeProductFromCart = function($index) {
  		$scope.cartProducts.splice($index, 1);
  	}
  }]);