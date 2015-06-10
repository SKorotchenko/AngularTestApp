define([
  '../config',
  './config/login.config',
  './controllers/login.controller',
  './services/login.services'
], function (config, loginConfig, loginCtrl, userLogin) {
  'use strict';

  var module = config.createModule('login');

  module.config(loginConfig)
    .controller('loginCtrl', loginCtrl)
    .factory('userLogin', userLogin)
});