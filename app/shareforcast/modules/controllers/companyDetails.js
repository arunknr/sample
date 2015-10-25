'use strict';

angular.module('com.shareForcast.controllers')
    .controller('CompanyDetails', ['$scope', '$routeParams', 'CompanyDetailsService',
        function ($scope, $routeParams, companyDetailsService) {
            $scope.companyName = companyDetailsService.details($routeParams.companyId);
        }]);
