'use strict';

angular.module('com.shareForcast.controllers', ['com.shareForcast.directives'])
    .controller('HomePageController', ['$scope',
        function ($scope) {
            $scope.members = ['EPS', 'Face Value', 'Market Cap', 'Maggi','Map', 'Price', '>', '<', '=', '<=', '>=', 'AND', 'OR'];
        }
    ]);