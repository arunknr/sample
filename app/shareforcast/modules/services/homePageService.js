'use strict';

angular.module('com.shareForcast.services')
    .factory('HomePageService', ['$http', function ($http) {

        var keyWords = function () {
            return $http({
                method: 'GET',
                url: "http://localhost:8080/keywords"
            });
        };

        return {
            keyWords : keyWords
        }
    }]);
