'use strict';

angular.module('com.shareForcast.controllers')
    .controller('HomePageController', ['$scope', 'HomePageService',
        function ($scope, homePageService) {
            $scope.members = homePageService.login();;
        }
    ]);