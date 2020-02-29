angular.module("sportsStore")
.constant("dataUrl", "http://80.211.189.37:5500/products")
.constant("orderUrl", "http://80.211.189.37:5500/orders")
.controller("sportsStoreCtrl", function ($scope, $http, $location, dataUrl, orderUrl, cart){
  
  $scope.data = {};

  $http.get(dataUrl)
    .then(function (resolve){
        $scope.data.products = resolve.data;
        console.log(resolve.status);
        console.log(resolve.data);
        console.log(resolve.headers);
        console.log(resolve.config);
        console.log(resolve.statusText);
        console.log(resolve.xhrStatus);
        }, function(reject) {
              $scope.data.error = reject.data || 'Request failed';
              console.log(reject.status);
              console.log(reject.data.message);
              console.log(reject.data.status);
              console.log(reject.headers);
              console.log(reject.config);
              console.log(reject.statusText);
              console.log(reject.xhrStatus);
            }
    );
  
    $scope.sendOrder = function (shippingDetails){
      var order = angular.copy (shippingDetails);
      
      order.products = cart.getProducts();
          
      $http.post(orderUrl, order)
        .then(function (data) {
           $scope.data.orderId = data.id;
           cart.getProducts().length = 0;
        }, 
        function(reject) {
          $scope.data.orderError = reject.data || 'Request failed';
          console.log(reject.status);
          
          console.log(reject.data.status);
          console.log(reject.headers);
          console.log(reject.config);
          console.log(reject.statusText);
          console.log(reject.xhrStatus);
        }).finally(function() {
        $location.path("/complete");
        console.log('arrivato')
      })
    };
  
});
  
