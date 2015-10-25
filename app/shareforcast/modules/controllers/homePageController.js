'use strict';

angular.module('com.shareForcast.controllers')
    .controller('HomePageController', ['$scope', '$rootScope', '$location','HomePageService',
        function ($scope, $rootScope, $location, homePageService) {
            $scope.members = $rootScope.keywords;
            $scope.showResultTable = false;

            $scope.submitQuery = function() {
                homePageService.submitQuery($scope.message).success(function (result) {
                    $scope.showResultTable = true;
                    $scope.companyDetails = result;
                })
            };

            $scope.buttonDisabled = function() {
                return $scope.message == undefined || $scope.message == "";
            };

            $scope.showCompanyDetails = function(companyId) {
                $location.path("/companyDetails").search({companyId: companyId});
            }
        }
    ]);