'use strict';

angular.module('shareForcast', ['com.shareForcast'])
angular.module('shareForcast').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/login', {templateUrl: 'modules/views/login.html', controller: 'LoginController'});
        $routeProvider.when('/home', {templateUrl: 'modules/views/home.html', controller: 'HomePageController'});
        $routeProvider.otherwise({redirectTo: '/login'});
        $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);