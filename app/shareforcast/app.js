'use strict';

angular.module('shareForcast', ['com.shareForcast']);
angular.module('shareForcast').config(['$routeProvider', '$httpProvider', function ($routeProvider) {
        $routeProvider.when('/login', {templateUrl: 'modules/views/login.html', controller: 'LoginController'});
        $routeProvider.when('/home', {templateUrl: 'modules/views/home.html', controller: 'HomePageController'});
        $routeProvider.otherwise({redirectTo: '/login'});
}]);