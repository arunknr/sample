'use strict';

angular.module('shareForcast', ['com.shareForcast']);
angular.module('shareForcast')
    .config(['$routeProvider', '$httpProvider',  function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'modules/views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'modules/views/register.html',
                controller: 'RegisterController'
            })
            .when('/home', {
                templateUrl: 'modules/views/home.html',
                controller: 'HomePageController',
                resolve: {
                    keywords : function(HomePageService, $rootScope, $q){
                        var deferred = $q.defer();
                        HomePageService.keyWords().success(function (result) {
                            $rootScope.keywords = result.shareKeywordList.map(function (shareKeyword) {
                                return shareKeyword.keyword;
                            });
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            })
            .when('/about', {
                            templateUrl: 'modules/views/about.html'
            })
            .when('/contact', {
                            templateUrl: 'modules/views/contact.html'
            })
            .when('/companyDetails', {
                templateUrl: 'modules/views/companyDetails.html',
                controller: 'CompanyDetails'
            })
            .otherwise({
                //redirectTo: '/login'
                templateUrl: 'modules/views/d3test.html'
            });

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);