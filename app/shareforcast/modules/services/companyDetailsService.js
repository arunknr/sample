'use strict';

angular.module('com.shareForcast.services')
    .factory('CompanyDetailsService', ['$http', function ($http) {

        var details = function (companyId) {
            //return $http({
            //    method: 'GET',
            //    url: "http://localhost:8080/details"
            //});
            return "ONGCC" + companyId;
        };

        return {
            details: details
        }
    }]);