'use strict';

var Angular = require('angular');
var Router  = require('angular-ui-router');

var Account  = require('./account');
var Config   = require('./config');
var Home     = require('./home');
var Run      = require('./run');
var Services = require('./services');

require('./styles');

module.exports = Angular.module('postcard-create', [
  Account,
  Home,
  Router,
  Services
])
.config(Config)
.run(Run)
.name;
