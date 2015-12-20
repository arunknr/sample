'use strict';

angular.module('com.shareForcast.controllers')
    .controller('CompanyDetails', ['$scope', '$routeParams', 'CompanyDetailsService',
        function ($scope, $routeParams, companyDetailsService) {

            $scope.showResultTable = false;

            $scope.submitCompany = function() {
                companyDetailsService.submitCompany($scope.companyId).success(function (resultFinancial) {
                    $scope.showResultTable = true;
                    $scope.companyFinancials = resultFinancial;
                })
            };

            companyDetailsService.details($routeParams.companyId).success(function(result){
                $scope.companyName = result.companyName;
                $scope.companyId = result.companyId;
                $scope.bseId = result.bseId;
                $scope.nseId = result.nseId;
                $scope.groupName = result.groupName;
                $scope.marketCap = result.marketCap;
            })

        }]);
