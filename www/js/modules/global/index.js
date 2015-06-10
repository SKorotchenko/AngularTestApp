define([
    '../config',
    './config/global.config',
    './global.controller'
], function(config, globalConfig, globalController){
    var module = config.createModule('global');

    //module.config(globalConfig, ['ngResource']);
    module.config(globalConfig);
    module.controller('globalController', globalController);
});