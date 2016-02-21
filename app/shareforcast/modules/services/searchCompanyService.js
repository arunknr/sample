'use strict';

angular.module('com.shareForcast.services')
    .factory('SearchCompanyService', ['$http', function ($http) {

         var companyinfo = function () {
                    return $http({
                        method: 'GET',
                        url: "http://localhost:8080/companies"
                    });
                };

        return {
            companyinfo : companyinfo
        }
    }]);
