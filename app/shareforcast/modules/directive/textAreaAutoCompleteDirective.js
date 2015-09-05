'use strict';

angular.module('com.shareForcast.directives', ['ngTextcomplete'])
    .directive('textcomplete', ['Textcomplete', function(Textcomplete) {
        return {
            restrict: 'EA',
            scope: {
                members: '=',
                message: '='
            },
            template: '<textarea ng-model=\'message\' type=\'text\' style="min-height: 200px; min-width: 500px;"></textarea>',
            link: function(scope, iElement, iAttrs) {

                var mentions = scope.members;
                var ta = iElement.find('textarea');
                var textcomplete = new Textcomplete(ta, [
                    {
                        match: /(^|\s)\w(\w*)$/,
                        search: function(term, callback) {
                            callback($.map(mentions, function(mention) {
                                return mention.toLowerCase().indexOf(term.toLowerCase()) === 0 ? mention : null;
                            }));
                        },
                        index: 2,
                        replace: function(mention) {
                            return '$1' + mention + ' ';
                        }
                    }
                ]);

                $(textcomplete).on({
                    'textComplete:select': function (e, value) {
                        scope.$apply(function() {
                            scope.message = value
                        })
                    },
                    'textComplete:show': function (e) {
                        $(this).data('autocompleting', true);
                    },
                    'textComplete:hide': function (e) {
                        $(this).data('autocompleting', false);
                    }
                });
            }
        }
    }]);