define(function(require){

    /**
     * @ngdoc object
     * @name modules
     *
     * @description
     * './www/js/modules/modules.js',
     *
     * Setup all modules
     * @example
     var modules = angular.module('app.modules', [
     'login'
     ]);

     require('./login/index');
     *
     *
     */
    var modules = angular.module('modules', [
        'global',
        'login'
    ]);

    require('./global/index');
    require('./login/index');
});