define(function(){
    return [
        'localStorageService',
        'appConfig',
        function (localStorageService, appConfig) {
            var prefix = appConfig.storagePrefix;
            return {
                set: function(key, value) {
                    /**
                     * @ngdoc method
                     * @name set
                     * @methodOf modules.global.Storage
                     *
                     * @param {string} key value name
                     * @param {string|object} value value
                     *
                     * @description
                     * Setup value of localstorage object
                     *
                     */
                    localStorageService.set(prefix+'.'+key, value);
                },
                get: function(key, defaultValue) {
                    /**
                     * @ngdoc method
                     * @name get
                     * @methodOf modules.global.Storage
                     *
                     * @param {string} key value name
                     *
                     * @returns {string, object} key value
                     *
                     * @description
                     * Get value of localstorage object
                     *
                     */
                    return localStorageService.get(prefix+'.'+key) || defaultValue;
                },
                remove: function(key){
                    /**
                     * @ngdoc method
                     * @name remove
                     * @methodOf modules.global.Storage
                     *
                     * @param {string} key value name
                     *
                     * @description
                     * Remove value of localstorage object
                     *
                     */
                    localStorageService.remove(prefix+'.'+key);
                },
                clearAll: function(){
                    /**
                     * @ngdoc method
                     * @name clearAll
                     * @methodOf modules.global.Storage
                     *
                     * @description
                     * Remove localstorage database
                     *
                     */
                    localStorageService.clearAll();
                },
                logEvent: function(){

                }
            }
        }
    ];
});