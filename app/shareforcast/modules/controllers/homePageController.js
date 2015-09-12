'use strict';

angular.module('com.shareForcast.controllers')
    .controller('HomePageController', ['$scope', 'HomePageService',
        function ($scope, homePageService) {
            init();

            //Temp fix - need to be removed after services started to ork fine
            $scope.members = ['EPS', 'Face Value', 'Market Cap', 'Maggi','Map', 'Price', '>', '<', '=', '<=', '>=', 'AND', 'OR'];

            function init(){
                homePageService.keyWords().success(function(result){
                    $scope.members = result.shareKeywordList.map(function(shareKeyword){
                        return shareKeyword.keyword;
                    });
                });
            }
        }
    ]);