'use strict';

angular.module('shareForcast', ['com.shareForcast']);
angular.module('shareForcast')
    .config(['$routeProvider', '$httpProvider',  function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'modules/views/login.html',
                controller: 'LoginController'
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
            .otherwise({
                redirectTo: '/login'
            });

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);