'use strict';

angular.module('com.shareForcast.services')
    .factory('CompanyDetailsService', ['$http', function ($http) {

        var details = function (companyId) {
            return $http({
                method: 'GET',
                url: "http://localhost:8080/companyDetails?companyId=" + companyId
            });
        };

        var submitBalanceSheet = function(companyId) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyBalanceSheet?companyId=" + companyId
          });
        };

        var submitProfitLoss = function(companyId) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyProfitLoss?companyId=" + companyId
          });
        };

        var submitCashFlow = function(companyId) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyCashFlow?companyId=" + companyId
          });
        };

        return {
            details: details,
            submitBalanceSheet: submitBalanceSheet,
            submitProfitLoss : submitProfitLoss,
            submitCashFlow : submitCashFlow
        }
    }]);