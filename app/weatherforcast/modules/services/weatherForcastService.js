'use strict';

angular.module('wwc.weatherForcast.services')
    .factory('WeatherService', ['$http', function ($http) {

        var getWeatherForLocation = function (id, password) {
           return $http({
               method: 'GET',
               url: "http://localhost:8080/greeting?id=" + id
            });
        }

        return {
            getWeatherForLocation : getWeatherForLocation
        }
    }]);
