'use strict';

angular.module('com.shareForcast.controllers')
    .controller('HomePageController', ['$scope', '$rootScope', 'HomePageService',
        function ($scope, $rootScope, homePageService) {
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
        }
    ]);