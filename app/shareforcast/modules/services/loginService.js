'use strict';

angular.module('com.shareForcast.services')
    .factory('LoginService', ['$http', function ($http) {

        var login = function (username, password) {
           return $http({
               method: 'GET',
               url: "http://localhost:8080/login?username=" + username + "&password=" + password
            });
        };

        return {
            login : login
        }
    }]);
