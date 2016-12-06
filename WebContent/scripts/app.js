'use strict';

/**
 * @ngdoc overview
 * @name onlineGroceryStoreApp
 * @description
 * # onlineGroceryStoreApp
 *
 * Main module of the application.
 */
angular
  .module('onlineGroceryStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/products/:productId', {
        templateUrl: 'views/productDetail.html',
        controller: 'ProductDetailCtrl',
        controllerAs: 'productDetail'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/customer-info', {
        templateUrl: 'views/customerInfo.html',
        controller: 'CustomerInfoCtrl',
        controllerAs: 'customerInfo'
      })
      .when('/order-history', {
        templateUrl: 'views/orderHistory.html',
        controller: 'OrderHistoryCtrl',
        controllerAs: 'orderHistory'
      })
      .when('/order-payment', {
        templateUrl: 'views/orderPayment.html',
        controller: 'OrderPaymentCtrl',
        controllerAs: 'orderPayment'
      })  
      .when('/cart', {
        templateUrl: 'views/cartItems.html',
        controller: 'CartItemsCtrl',
        controllerAs: 'cartItems'
      })
      .when('/register', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin'
      })
      .when('/forgotPassword', {
        templateUrl: 'views/forgotPassword.html',
        controller: 'ForgotPasswordCtrl',
        controllerAs: 'forgotPassword'
      })
      .when('/admin/products', {
        templateUrl: 'views/admin/adminProducts.html',
        controller: 'AdminProductsCtrl',
        controllerAs: 'adminProducts'
      })
      .when('/admin/products/create', {
        templateUrl: 'views/admin/adminAddProduct.html',
        controller: 'AdminAddProductCtrl',
        controllerAs: 'adminAddProduct'
      })
      .when('/admin/products/:productId', {
        templateUrl: 'views/admin/adminManageProduct.html',
        controller: 'AdminManageProductCtrl',
        controllerAs: 'adminManageProduct'
      })
      .when('/admin/warehouses', {
        templateUrl: 'views/admin/adminWarehousesList.html',
        controller: 'AdminWarehousesListCtrl',
        controllerAs: 'adminWarehousesList'
      })
      .when('/admin/warehouses/:warehouseId', {
        templateUrl: 'views/admin/adminManageWarehouseSupplies.html',
        controller: 'AdminManageWarehouseSuppliesCtrl',
        controllerAs: 'adminManageWarehouseSupplies'
      })
      .when('/admin/suppliers', {
        templateUrl: 'views/admin/adminManageSuppliers.html',
        controller: 'AdminManageSuppliersCtrl',
        controllerAs: 'adminManageSuppliers'
      })
      .when('/admin/orders', {
        templateUrl: 'views/admin/adminOrders.html',
        controller: 'AdminOrdersCtrl',
        controllerAs: 'adminOrders'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
