angular.module("sportStoreAdmin")
  .constant("productUrl", "http://80.211.189.37:5500/products")
  .config(function($httpProvider){
    $httpProvider.defaults.withCredentials = true;
  })
  .controller("productCtrl", function($scope, $resource, productUrl){
    
    $scope.productsResource = $resource(productUrl, + ":id", {id: "@id"});
    
    $scope.listProducts = function(){
      $scope.products = $scope.productsResource.query();
    }

    $scope.deleteProduct = function(product) {
      new $scope.productsResource(product).$save().then(function (newProduct){
        $scope.products.push(newProduct);
        $scope.editedProduct = null;
      })
    }

    $scope.updateProduct = function (product) {
      product.$save();
      $scope.editedProduct = null;
    }

    $scope.stratEdit = function(product){
      $scope.editedProduct = null;
    }

    $scope.cancelEdit = function(){
      $scope.editedProduct = null;
    }

    $scope.listProducts();


  });