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
                    $scope.title = "successfully logged in";
                else
                    $scope.title = "wrong username password combination";
            });
        }
    }]);