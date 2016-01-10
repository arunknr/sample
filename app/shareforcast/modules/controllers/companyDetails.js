'use strict';

angular.module('com.shareForcast.controllers')
    .controller('CompanyDetails', ['$scope', '$routeParams', 'CompanyDetailsService',
        function ($scope, $routeParams, companyDetailsService) {

            $scope.showResultTable = false;

            $scope.submitFinancial = function(reportPeriod, financial) {
                if (!financial.localeCompare("BalanceSheet")) {
                    companyDetailsService.submitBalanceSheet($scope.companyId, reportPeriod).success(function (resultFinancial) {
                        $scope.showResultTable = true;
                        $scope.companyFinancials = resultFinancial;
                        $scope.financial = "BalanceSheet";
                    })
                } else if (!financial.localeCompare("ProfitLoss")) {
                    companyDetailsService.submitProfitLoss($scope.companyId, reportPeriod).success(function (resultFinancial) {
                        $scope.showResultTable = true;
                        $scope.companyFinancials = resultFinancial;
                        $scope.financial = "ProfitLoss";
                    })
                } else if (!financial.localeCompare("CashFlow")) {
                    companyDetailsService.submitCashFlow($scope.companyId, reportPeriod).success(function (resultFinancial) {
                        $scope.showResultTable = true;
                        $scope.companyFinancials = resultFinancial;
                        $scope.financial = "CashFlow";
                    })
                }
            };

            companyDetailsService.details($routeParams.companyId).success(function(result){
                $scope.companyName = result.companyName;
                $scope.companyId = result.companyId;
                $scope.bseId = result.bseId;
                $scope.nseId = result.nseId;
                $scope.industry = result.industry;
                $scope.marketCap = result.marketCap;
            })
        }]);
