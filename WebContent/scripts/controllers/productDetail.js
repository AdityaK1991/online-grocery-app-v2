angular.module('onlineGroceryStoreApp')
  .controller('ProductDetailCtrl', ['ProductService', '$rootScope', '$scope', 
                                    function (ProductService, $rootScope, $scope) {
	  
    $scope.pQty=10;

    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;
    
    
    $scope.product = ProductService.getProductInfoForDisplay();
    
    $scope.name = $scope.product.prodName;
    $scope.price = $scope.product.ProdPrice;
    $scope.category = $scope.product.prodType;
  
}]);
