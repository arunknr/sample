'use strict';

angular.module('com.shareForcast.controllers')
    .controller('RegisterController', ['$scope', '$location', 'RegisterService',
    function ($scope, $location, registerService) {
        $scope.title = "";

        $scope.register = function () {
            var id = $scope.userid;
            var password = $scope.psw;
            var firstname = $scope.firstname;
            var lastname = $scope.lastname;
            var email = $scope.email;

            registerService.register(id, password, firstname, lastname, email).success(function(result){
                if(result.loggedIn) {
                    $scope.title = id + " successfully registered.";
                    $scope.userid = "";
                    $scope.psw = "";
                    $scope.firstname = "";
                    $scope.lastname = "";
                    $scope.email = "";
                    }
                else
                    $scope.title = "Something went wrong. Register again!!";
            });
        }
    }]);