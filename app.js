app = angular.module("app", []);

app.controller('driverController', function($scope, DriverService){
  //properties
  $scope.driver_list = DriverService.driver_list;
  $scope.driver_model = {};
  $scope.show_driver_form = false;
  $scope.edit_driver_index = -1;
  $scope.invalid_form_driver = false;
  //methods
  $scope.addDriver = addDriver;
  $scope.editDriver = editDriver;
  $scope.saveEditDriver = saveEditDriver;
  $scope.submit = submit;
  $scope.cancel = cancel;
  $scope.toggleDriverForm = toggleDriverForm;

  function resetDriverForm() {
    $scope.driver_model = {};
    $scope.edit_driver_index = -1;
    toggleDriverForm();
  }

  function addDriver() {
    DriverService.driver_list.push(angular.copy($scope.driver_model));
  }

  function editDriver(driver, index) {
    $scope.driver_model = angular.copy(driver);
    $scope.edit_driver_index = index;
    toggleDriverForm();
  }

  function saveEditDriver() {
    DriverService.driver_list[$scope.edit_driver_index] = angular.copy($scope.driver_model);
  }

  function toggleDriverForm() {
    $scope.show_driver_form = !$scope.show_driver_form;
  }

  function submit(form) {
    if (form.$valid) {
      $scope.invalid_form_driver = false;
      if ($scope.edit_driver_index !== -1) {
        saveEditDriver();
      } else {
        addDriver();
      }
      resetDriverForm();
    } else {
      $scope.invalid_form_driver = true;
    }
  }

  function cancel() {
    $scope.driver_model = {};
    $scope.edit_driver_index = -1;
    toggleDriverForm();
  }
});

app.controller('customerController', function($scope, CustomerService){
  //properties
  $scope.customer_list = CustomerService.customer_list;
  $scope.customer_model = {};
  $scope.show_customer_form = false;
  $scope.edit_customer_index = -1;
  $scope.invalid_form_customer = false;
  //methods
  $scope.addCustomer = addCustomer;
  $scope.editCustomer = editCustomer;
  $scope.saveEditCustomer = saveEditCustomer;
  $scope.submit = submit;
  $scope.cancel = cancel;
  $scope.toggleCustomerForm = toggleCustomerForm;

  function resetCustomerForm() {
    $scope.customer_model = {};
    $scope.edit_customer_index = -1;
    toggleCustomerForm();
  }

  function addCustomer() {
    CustomerService.customer_list.push(angular.copy($scope.customer_model));
  }

  function editCustomer(customer, index) {
    $scope.customer_model = angular.copy(customer);
    $scope.edit_customer_index = index;
    toggleCustomerForm();
  }

  function saveEditCustomer() {
    CustomerService.customer_list[$scope.edit_customer_index] = angular.copy($scope.customer_model);
  }

  function toggleCustomerForm() {
    $scope.show_customer_form = !$scope.show_customer_form;
  }

  function submit(form) {
    if (form.$valid) {
      $scope.invalid_form_customer = false;
      if ($scope.edit_customer_index !== -1) {
        saveEditCustomer();
      } else {
        addCustomer();
      }
      resetCustomerForm();
    } else {
      $scope.invalid_form_customer = true;
    }
  }

  function cancel() {
    $scope.customer_model = {};
    $scope.edit_customer_index = -1;
    toggleCustomerForm();
  }

});

app.controller('runController', function($scope, DriverService, CustomerService, RunService){
  //properties
  $scope.driver_list = DriverService.driver_list;
  $scope.customer_list = CustomerService.customer_list;
  $scope.run_list = RunService.run_list;
  $scope.run_model = {};
  $scope.show_run_form = false;
  $scope.edit_run_index = -1;
  $scope.invalid_form_run = false;
  //methods
  $scope.addRun = addRun;
  $scope.editRun = editRun;
  $scope.saveEditRun = saveEditRun;
  $scope.submit = submit;
  $scope.cancel = cancel;
  $scope.toggleRunForm = toggleRunForm;

  function resetRunForm() {
    $scope.run_model = {};
    $scope.edit_run_index = -1;
    toggleRunForm();
  }

  function addRun() {
    RunService.run_list.push(angular.copy($scope.run_model));
  }

  function editRun(run, index) {
    $scope.run_model = angular.copy(run);
    $scope.edit_run_index = index;
    toggleRunForm();
  }

  function saveEditRun() {
    RunService.run_list[$scope.edit_run_index] = angular.copy($scope.run_model);
  }

  function toggleRunForm() {
    $scope.show_run_form = !$scope.show_run_form;
  }

  function submit(form) {
    if (form.$valid) {
      $scope.invalid_form_run = false;
      if ($scope.edit_run_index !== -1) {
        saveEditRun();
      } else {
        addRun();
      }
      resetRunForm();
    } else {
      $scope.invalid_form_run = true;
    }
  }

  function cancel() {
    $scope.run_model = {};
    $scope.edit_run_index = -1;
    toggleRunForm();
  }

});

app.service('DriverService', function(){
  this.driver_list = [];
});

app.service('CustomerService', function(){
  this.customer_list = [];
});

app.service('RunService', function(){
  this.run_list = [];
});
