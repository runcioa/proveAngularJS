angular.module("sportsStoreAdmin")
  .constant("authUrl", "http://80.211.189.37:5500/users/login")
  .constant("ordersUrl", "http://80.211.189.37:5500/orders")
  .controller("authCtrl", function($scope, $http, $location, authUrl){

    $scope.authenticate = function(user, pass){
      $http.post(authUrl, {
        username: user,
        password: pass
      }, {
        withCredentials: true
      }).then(function(response){
        $location.path("/main");
      }).catch(function(response){
        $scope.authenticationError = response.data;
        console.log(response.data);

      });
    }
  })
  .controller("mainCtrl", function($scope){
    
    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function(index){
      $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function(){
      return $scope.current == "Products" ? "./view/adminProducts.html" : "./view/adminOrders.html";
      
    };
  })
  .controller("ordersCtrl", function ($scope, $http, ordersUrl){
    $http.get(ordersUrl, {withCredentials : true})
      .then(function(response){
        $scope.orders = response.data;
      }).catch(function(response){
        $scope.error = response.data;
      });

    $scope.selectedOrder;

    $scope.selectOrder = function(order){
      $scope.selectedOrder = order;
      

    };

    $scope.calcTotal = function(order){
      var total = 0;
      for(var i=0; i< order.products.length; i++){
        total += order.products[i].count * order.products[i].price;
      }
      return total;
    }

  });

  