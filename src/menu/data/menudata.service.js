(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('apiBasePath', ' https://coursera-jhu-default-rtdb.firebaseio.com/');

  MenuDataService.$inject = ['$http', 'apiBasePath'];
  function MenuDataService ($http, apiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      var result = $http({
        method: 'GET',
        url: (apiBasePath + 'categories.json')
      });

      return result;
    }

    // service.getItemsForCategory = function (categoryShortName) {
    //   return $http({
    //     method: 'GET',
    //     url: (apiBasePath + 'menu_items.json?category=' + categoryShortName)
    //   });
    // }
  service.getItemsForCategory = function (categoryShortName) {
    var categoryJSON = "";

    categoryJSON = categoryShortName + ".json";


  var response = $http({
    method: "GET",
    url: (apiBasePath + "/menu_items/"+categoryJSON)
  });
  return response;
};
  }

})();
