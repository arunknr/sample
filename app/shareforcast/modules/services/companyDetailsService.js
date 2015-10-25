'use strict';

angular.module('com.shareForcast.services')
    .factory('CompanyDetailsService', ['$http', function ($http) {

        var details = function (companyId) {
            return $http({
                method: 'GET',
                url: "http://localhost:8080/companyDetails?companyId=" + companyId
            });
        };

        return {
            details: details
        }
    }]);