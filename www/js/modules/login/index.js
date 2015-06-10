define([
  '../config',
  './config/login.config',
  './controllers/login.controller'
], function (config, loginConfig, loginCtrl) {
  'use strict';

  var module = config.createModule('login');

  module.config(loginConfig)
    .controller('loginCtrl', loginCtrl)
});