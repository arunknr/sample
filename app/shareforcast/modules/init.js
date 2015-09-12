'use strict';

var com = com || {};
com.ShareForcast = com.ShareForcast || {};

angular.module('com.shareForcast.services', []);
angular.module('com.shareForcast.controllers', ['com.shareForcast.services', 'com.shareForcast.directives']);
angular.module('com.shareForcast.directives', []);
angular.module('com.shareForcast', ['com.shareForcast.controllers', 'com.shareForcast.services']);