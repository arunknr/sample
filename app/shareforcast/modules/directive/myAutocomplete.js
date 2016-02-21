'use strict';

angular.module('com.shareForcast.directives')
	.directive('autocomplete', ['SearchCompanyService', function (SearchCompanyService) {
                             return {
                                 restrict: "A",
                                 link: function (scope, element, attr, ctrl) {

                                     element.autocomplete({
                                         source: function (searchTerm, response) {
                                             SearchCompanyService.companyinfo().success(function (result)  {

                                                var x = result.companyList.map(function (company) {
                                                          return (company.companyName+" - "+company.companyId);

                                             })
                                                        var results = [];
                                                        var i = 0,j =0;
                                                        for (i = 0; i < x.length; i++) {
                                                            if (x[i].toUpperCase().indexOf(searchTerm.term.toUpperCase()) > -1)
                                                                results.push(x[i]);
                                                        }
                                                        response(results);
                                             });

                                         },
                                         minLength: 3,
                                         select: function (event, selectedItem) {
                                             // Do something with the selected item, e.g.
                                             scope.yourObject= selectedItem.item.value;
                                             scope.$apply();
                                             //event.preventDefault();
                                         }
                                     });
                                 }
                             };
                         }]);
