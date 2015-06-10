define([
    'angular'
], function (angular) {
    'use strict';

    /**
     * @ngdoc object
     * @name appConfig
     *
     * @description
     * './www/js/modules/config.js',
     *
     * Values of constants for project
     *
     * @param {string} appName app name
     */
    return {
        appConfig: {
            appName: 'app'
        },
        createModule: function(moduleName, dependencies){
            return angular.module(moduleName, dependencies || []);
        }
    }

});