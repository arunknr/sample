'use strict';

angular.module('com.shareForcast.controllers')
    .controller('LoginController', ['$scope', '$location', 'LoginService',
    function ($scope, $location, loginService) {

        $scope.condition = null;
        var id = $scope.userid;
        var password = $scope.psw;

        $scope.login = function () {
            loginService.login(id, password).success(function(result){
                $scope.title = result.content;
                $scope.condition = true;
            });
        }
    }]);