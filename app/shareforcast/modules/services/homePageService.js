'use strict';

angular.module('com.shareForcast.services')
    .factory('HomePageService', ['$http', function ($http) {

        var keyWords = function () {
            return $http({
                method: 'GET',
                url: "http://localhost:8080/keywords"
            });
        };

        var submitQuery = function(query) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/query?query=" + query
          });
        };

        return {
            keyWords : keyWords,
            submitQuery: submitQuery
        }
    }]);
