'use strict';

angular.module('com.shareForcast.services')
    .factory('CompanyDetailsService', ['$http', function ($http) {

        var details = function (companyId) {
            return $http({
                method: 'GET',
                url: "http://localhost:8080/companyDetails?companyId=" + companyId
            });
        };

        var submitBalanceSheet = function(companyId, reportPeriod) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyBalanceSheet?companyId=" + companyId + "&reportPeriod=" + reportPeriod
          });
        };

        var submitProfitLoss = function(companyId, reportPeriod) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyProfitLoss?companyId=" + companyId + "&reportPeriod=" + reportPeriod
          });
        };

        var submitCashFlow = function(companyId, reportPeriod) {
          return $http({
              method: 'GET',
              url: "http://localhost:8080/companyCashFlow?companyId=" + companyId + "&reportPeriod=" + reportPeriod
          });
        };

        return {
            details: details,
            submitBalanceSheet: submitBalanceSheet,
            submitProfitLoss : submitProfitLoss,
            submitCashFlow : submitCashFlow
        }
    }]);