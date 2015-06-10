define([
    '../config',
    './config/global.config',
    './global.controller',
    './services/global.localstorage',
    './services/global.api'
], function(config, globalConfig, globalController, localstorage, api){
    /**
     * @ngdoc object
     * @name modules.global
     *
     * @description
     * './www/js/modules/global',
     *
     */

    var module = config.createModule('global');

    //module.config(globalConfig, ['ngResource']);
    module.config(globalConfig, ['restangular']);
    module
    /**
     * @ngdoc object
     * @name modules.global.controller:globalController
     *
     * @description
     * './www/js/modules/global/global.controller.js'
     *
     * Main app controller for checking user auth and redirecting to login/find page
     */
        .controller('globalController', globalController)
    /**
     * @ngdoc service
     * @name modules.global.Storage
     *
     * @description
     * './www/js/modules/global/services/global.localstorage.js'
     *
     * Service for set/get/remove storage data
     */
        .factory('Storage', localstorage)
    /**
     * @ngdoc service
     * @name modules.global.apiService
     *
     * @description
     * './www/js/modules/global/services/global.api.js'
     *
     * Service for making REST requests to the server
     */
        .factory('apiService', api);

});