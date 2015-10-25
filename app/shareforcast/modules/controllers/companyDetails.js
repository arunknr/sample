'use strict';

angular.module('com.shareForcast.controllers')
    .controller('CompanyDetails', ['$scope', '$routeParams', 'CompanyDetailsService',
        function ($scope, $routeParams, companyDetailsService) {

            companyDetailsService.details($routeParams.companyId).success(function(result){
                $scope.companyName = result.companyName;
            })
        }]);
