'use strict';

angular.module('weatherForcast', ['wwc.weatherForcast'])
angular.module('weatherForcast').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/weatherforcast', {templateUrl: 'modules/views/weatherForcast.html', controller: 'WeatherController'});
        $routeProvider.otherwise({redirectTo: '/weatherforcast'});
        $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);