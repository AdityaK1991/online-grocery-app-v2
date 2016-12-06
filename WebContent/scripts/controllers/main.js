'use strict';

/**
 * @ngdoc function
 * @name onlineGroceryStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineGroceryStoreApp
 */
angular.module('onlineGroceryStoreApp')
  .controller('MainCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$rootScope.isMenuVisible = true;
	$rootScope.isAdminMenuVisible = false;

  });
