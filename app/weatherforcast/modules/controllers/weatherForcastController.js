'use strict';

angular.module('wwc.weatherForcast.controllers')
    .controller('WeatherController', ['$scope', '$location', 'WeatherService',
    function ($scope, $location, weatherService) {

        $scope.condition = null;
        var id = 1;
        var password = 123;

        $scope.getWeather = function () {
            weatherService.getWeatherForLocation(id, password).success(function(result){
            console.log(result);

                $scope.title = result.content;
                $scope.condition = true;
            });
        }

    }]);