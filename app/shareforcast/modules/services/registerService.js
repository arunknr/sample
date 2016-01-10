'use strict';

angular.module('com.shareForcast.services')
    .factory('RegisterService', ['$http', function ($http) {

        var register = function (username, password, firstname, lastname, email) {
           return $http({
               method: 'GET',
               url: "http://localhost:8080/register?username=" + username + "&password=" + password + "&firstname=" + firstname + "&lastname=" + lastname + "&email=" + email
            });
        };

        return {
            register : register
        }
    }]);
