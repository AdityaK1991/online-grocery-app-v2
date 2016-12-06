 angular.module('onlineGroceryStoreApp')
  .controller('CustomerInfoCtrl', function ($rootScope, $scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;

 /* First Name */

//  $scope.fName = "Test FName";
//  $scope.lName = "Test LName";
//  $scope.addressL1 = "Address L1";
//  $scope.addressL2 = "Address L2";
//  $scope.city = "City";
//  $scope.state = "State";
//  $scope.zip = 60616;
//  $scope.country = "Country";
//  $scope.phone = 1234567890;

  $scope.editorCustomerInfoEnabled = false;
  
  $scope.enableCustomerInfoEditor = function() {
    $scope.editorCustomerInfoEnabled = true;
    $scope.editableFName = $scope.customer.fName;
    $scope.editableMName = $scope.customer.mName;
    $scope.editableLName = $scope.customer.lName;
    $scope.editableAddressL1 = $scope.customer.addressL1;
    $scope.editableAddressL2 = $scope.customer.addressL2;
    $scope.editableCity = $scope.customer.city;
    $scope.editableState = $scope.customer.state;
    $scope.editableZip = $scope.customer.zip;
//    $scope.editableCountry = $scope.country;
    $scope.editablePhone = $scope.customer.phone;
  };
  
  $scope.disableCustomerInfoEditor = function() {
    $scope.editorCustomerInfoEnabled = false;
  };
  
  $scope.saveCustomerInfo = function() {
    $scope.customer.fName = $scope.editableFName;
    $scope.customer.mName = $scope.editableMName;
    $scope.customer.lName = $scope.editableLName;
    $scope.customer.addressL1 = $scope.editableAddressL1;
    $scope.customer.addressL2 = $scope.editableAddressL2;
    $scope.customer.city = $scope.editableCity;
    $scope.customer.state = $scope.editableState;
    $scope.customer.zip = $scope.editableZip;
//    $scope.country = $scope.editableCountry;
    $scope.customer.phone = $scope.editablePhone;

    $scope.disableCustomerInfoEditor();
  };

  $scope.getDataFromServer = function() {
      $http({
              method : 'GET',
              //url : 'ConnectToDatabase'
              url : 'DataSource'
      }).success(function(data, status, headers, config) {
              $scope.product = data;
      }).error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
      });

};

/* Name on Card */
 
 $scope.paymentMethods = [{id: 0, cardName: "sdfsff", cardNumber: 234234, cardMM: 11, cardYYYY: 2019}];

 $scope.paymentMethodsCopy = [];

  angular.forEach($scope.paymentMethods, function(value, key) {
    $scope.paymentMethodsCopy.push({
      id: value.id,
      isCardEditable: false
    });
  });

  $scope.enableCardEditor = function($index) {
    $scope.paymentMethodsCopy[$index].isCardEditable = true;
  };
  
  $scope.disableCardEditor = function($index) {
    $scope.paymentMethodsCopy[$index].isCardEditable = false;
  };
  
  $scope.saveCardInfo = function($index) {
    // angular.copy($scope.editedCard, $scope.paymentMethods[$scope.id]);

    $scope.disableCardEditor($index);
  };

  $scope.addPaymentMethod = function() {

    $scope.len = $scope.paymentMethods.length;

    $scope.paymentMethods.push(
      { 
        id: $scope.len+1,
        cardName: "sdfsff",
        cardNumber: null,
        cardMM: null,
        cardYYYY: null
      });

    $scope.paymentMethodsCopy.push({
      id: $scope.len+1,
      isCardEditable: false
    });
  }

  $scope.deleteCard = function($index) {
    $scope.paymentMethods.splice($index, 1);
    $scope.paymentMethodsCopy.splice($index, 1);

  }

// /* Card Number */
 
//   $scope.editorCardNumberEnabled = false;
  
//   $scope.enableCardNumberEditor = function() {
//     $scope.editorCardNumberEnabled = true;
//     $scope.cardNumber = $scope.cardNumber;
//   };
  
//   $scope.disableCardNumberEditor = function() {
//     $scope.editorCardNumberEnabled = false;
//   };
  
//   $scope.saveCardNumber = function() {
//     $scope.cardNumber = $scope.cardNumber;
//     $scope.disableCardNumberEditor();
//   };


// /* Card Month */
 
 

//   $scope.editorCardDateEnabled = false;
  
//   $scope.enableCardDateEditor = function() {
//     $scope.editorCardDateEnabled = true;
//     $scope.cardMM = $scope.cardMM;
//     $scope.cardYYYY = $scope.cardYYYY;
//   };
  
//   $scope.disableCardDateEditor = function() {
//     $scope.editorCardDateEnabled = false;
//   };
  
//   $scope.saveCardDate = function() {
//     $scope.cardMM = $scope.cardMM;
//     $scope.cardYYYY = $scope.cardYYYY;
//     $scope.disableCardDateEditor();
//   };


// /* Card Year*/
 
//   $scope.editorCardYYYYEnabled = false;
  
//   $scope.enableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = true;
//     $scope.cardYYYY = $scope.cardYYYY;
//   };
  
//   $scope.disableCardYYYYEditor = function() {
//     $scope.editorCardYYYYEnabled = false;
//   };
  
//   $scope.save = function() {
//     $scope.cardYYYY = $scope.cardYYYY;
//     $scope.disableCardYYYYEditor();
//   };

  });
