'use strict';

angular.module('com.shareForcast.services')
    .factory('LoginService', ['$http', function ($http) {

        var login = function (id, password) {
           return $http({
               method: 'GET',
               url: "http://localhost:8080/greeting?id=" + id
            });
        }

        return {
            login : login
        }
    }]);
