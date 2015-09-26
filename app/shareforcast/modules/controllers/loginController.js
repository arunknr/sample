'use strict';

angular.module('com.shareForcast.controllers')
    .controller('LoginController', ['$scope', '$location', 'LoginService',
    function ($scope, $location, loginService) {
        $scope.title = "";

        $scope.login = function () {
            var id = $scope.userid;
            var password = $scope.psw;

            loginService.login(id, password).success(function(result){
                if(result.loggedIn)
                    $scope.title = "Successfully logged in.";
                else
                    $scope.title = "Wrong username / password combination";
            });
        }
    }]);