angular.module("sportsStore")
.constant("dataUrl", "http://80.211.189.37:5500/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl){
  
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



    // products: [
    //   {name:"Product #1", description: "A product", category: "Category #1", price: 100},
    //   {name:"Product #2", description: "A product", category: "Category #1", price: 110},
    //   {name:"Product #3", description: "A product", category: "Category #2", price: 210},
    //   {name:"Product #4", description: "A product", category: "Category #3", price: 202},
    //   {name:"Product #4", description: "A product", category: "Category #3", price: 202},
    //   {name:"Product #4", description: "A product", category: "Category #3", price: 202},
    //   {name:"Product #4", description: "A product", category: "Category #3", price: 202}

    // ]
  ;
});

