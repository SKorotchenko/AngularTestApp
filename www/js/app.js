define([
    'angular',
    './modules/config',
    './modules/modules',
    'uiRouter',
    'validationMatch',
    'restangular'
], function (angular, config) {
    'use strict';

    var app = angular.module(config.appConfig.appName, [
        'ui.router',
        'modules',
        'validation.match',
        'restangular'
    ]);

    app
        .constant('appConfig', config.appConfig)
        .config([
            '$locationProvider',
            '$urlRouterProvider',
            function ($locationProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");
            }
        ]);

    return app;

});