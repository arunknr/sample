'use strict';

angular.module('com.shareForcast.controllers', ['com.shareForcast.directives'])
    .controller('HomePageController', ['$scope', 'HomePageService',
        function ($scope, homePageService) {
            $scope.members = homePageService.login();;
        }
    ]);