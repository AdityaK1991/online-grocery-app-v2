 angular.module('onlineGroceryStoreApp')
  .controller('CustomerInfoCtrl', ['LoginService', '$rootScope', '$scope', '$http', '$cookieStore',
                                   function (LoginService,$rootScope, $scope, $http, $cookieStore) {
   
    $rootScope.isMenuVisible = true;

    $rootScope.isAdminMenuVisible = false;

 /* First Name */
    $scope.customer = {};
    
//  $scope.customer.fname = "John";
//  $scope.customer.lname = "Smith";
//  $scope.customer.streetAddress = "2901 S King Drive";
//  $scope.customer.city = "Chicago";
//  $scope.customer.state = "IL";
//  $scope.customer.zip = 60616;
//  $scope.customer.country = "United States";
//  $scope.customer.phone = 9876543210;
//
//  $cookieStore.put('fname', $scope.customer.fname);
//  $cookieStore.put('lname', $scope.customer.lname);
//  $cookieStore.put('address', $scope.customer.streetAddress);
//  $cookieStore.put('city', $scope.customer.city);
//  $cookieStore.put('zip', $scope.customer.zip);
//  $cookieStore.put('phone', $scope.customer.phone);
  
  LoginService.saveCustomerInfoToDisplay($scope.customer);
  
  $scope.editorCustomerInfoEnabled = false;
  
  $scope.enableCustomerInfoEditor = function() {
    $scope.editorCustomerInfoEnabled = true;
    $scope.editableFName = $scope.customer.fname;
    $scope.editableMName = $scope.customer.mname;
    $scope.editableLName = $scope.customer.lname;
    $scope.editableAddressL1 = $scope.customer.streetAddress;
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
    $scope.customer.fname = $scope.editableFName;
    $scope.customer.mname = $scope.editableMName;
    $scope.customer.lname = $scope.editableLName;
    $scope.customer.streetAddress = $scope.editableAddressL1;
    $scope.customer.city = $scope.editableCity;
    $scope.customer.state = $scope.editableState;
    $scope.customer.zip = $scope.editableZip;
//    $scope.country = $scope.editableCountry;
    $scope.customer.phone = $scope.editablePhone;

    $scope.disableCustomerInfoEditor();
  };

  var promise = LoginService.getAccountDetails();
	
	promise.then(
			function(response) {
				if(response.data !== null) {
					$scope.customer = response.data;
					
					console.log(response.data);
				}
			});
	
//  $scope.getDataFromServer = function() {
//      $http({
//              method : 'GET',
//              //url : 'ConnectToDatabase'
//              url : 'DataSource'
//      }).success(function(data, status, headers, config) {
//              $scope.product = data;
//      }).error(function(data, status, headers, config) {
//              // called asynchronously if an error occurs
//              // or server returns response with an error status.
//      });

//};

/* Name on Card */


//if($cookieStore.get("paymentMethods") !== undefined) {
//	console.log($cookieStore.get("paymentMethods"));
//	 $scope.paymentMethods = $cookieStore.get("paymentMethods");
//} else {
//	$scope.paymentMethods = [];
//}

$scope.paymentMethods = [];

//$scope.paymentMethods = [];

 $scope.paymentMethodsCopy = [];

 LoginService.saveCardInfoToDisplay($scope.paymentMethods);
 
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
	 $cookieStore.put("paymentMethods", $scope.paymentMethods[$index]);
	 console.log($scope.paymentMethods[$index]);
	 
    $scope.disableCardEditor($index);
  };

  $scope.addPaymentMethod = function() {

//    $scope.len = $scope.paymentMethods.length;

    $scope.paymentMethods.push(
      { 
//        id: $scope.len+1,
        cardName: '',
        cardNumber: null,
        cardMM: null,
        cardYYYY: null
      });

    $scope.paymentMethodsCopy.push({
      id: $scope.len+1,
      isCardEditable: false
    });
  };

  $scope.deleteCard = function($index) {
    $scope.paymentMethods.splice($index, 1);
    $scope.paymentMethodsCopy.splice($index, 1);

  };

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

  }]);
