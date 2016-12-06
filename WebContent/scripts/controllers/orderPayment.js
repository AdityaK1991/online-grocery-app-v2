angular.module('onlineGroceryStoreApp')
  .controller('OrderPaymentCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = true;
    
    $rootScope.isAdminMenuVisible = false;

    $scope.fName="name";
    $scope.lName="test";
    $scope.addressL1="test address 1";
    $scope.addressL2="test address 2";
    $scope.city="city";
    $scope.state="state";
    $scope.zip="443344";

    $scope.cards=[{cardNumber:1234}, {cardNumber:5678}]
    
  });