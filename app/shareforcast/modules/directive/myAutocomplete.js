'use strict';

angular.module('com.shareForcast.directives')
	.directive('autocomplete', ['$location','SearchCompanyService', function ($location, searchCompanyService) {
                             return {
                                 restrict: "A",
                                 link: function (scope, element, attr, ctrl) {

                                     element.autocomplete({
                                         source: function (searchTerm, response) {
                                             searchCompanyService.companyinfo().success(function (result)  {

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
                                            var selectedCompany = selectedItem.item.value;
                                            var companyId = selectedCompany.substring(selectedCompany.length-6,selectedCompany.length);
                                             scope.$apply(function() {
                                                 $location.path("/companyDetails").search({companyId: companyId});
                                             });
                                             selectedItem.item.value = "";
                                         }
                                     });
                                 }
                             };
                         }]);
