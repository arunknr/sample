'use strict';

angular.module('com.shareForcast.controllers')
    .controller('HomePageController', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $scope.members = $rootScope.keywords;
        }
    ]);