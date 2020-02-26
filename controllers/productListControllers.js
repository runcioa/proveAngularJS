angular.module("sportsStore")
  .constant("productListActiveClass", "btn-danger")
  .constant("productListPageCount", 2)
  .controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount){

    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectedCategory = function (newCategory){
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    }
    $scope.selectPage = function (newPage){
      $scope.selectedPage = newPage;
    }

    $scope.categoryFilterFn = function(product){
      return selectedCategory == null || product.category ==  selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
      return selectedCategory == category ? productListActiveClass : "";
    }

    $scope.getPageClass = function(page){
      return $scope.selectedPage == page ? productListActiveClass : "";
    }

  });