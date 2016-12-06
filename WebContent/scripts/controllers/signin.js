angular.module('onlineGroceryStoreApp')
  .controller('SigninCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.isMenuVisible = false;
    $rootScope.isAdminMenuVisible = false;

  });
