'use strict';

angular.module('com.shareForcast.services')
    .factory('HomePageService', ['$http', function ($http) {

        var login = function () {
           return ['EPS', 'Face Value', 'Market Cap', 'Maggi','Map', 'Price', '>', '<', '=', '<=', '>=', 'AND', 'OR'];
        }

        return {
            login : login
        }
    }]);
