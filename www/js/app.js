define([
    'angular',
    './modules/config',
    './modules/modules',
    'uiRouter',
    'LocalStorageModule',
    //'ngResource',
    'validationMatch'
    //'restangular'
], function (angular, config) {
    'use strict';

    var app = angular.module(config.appConfig.appName, [
        'ui.router',
        'LocalStorageModule',
        //'ngResource',
        'modules',
        'validation.match'
        //'restangular'
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