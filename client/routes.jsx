'use strict';

// Include React to compile the routes below
var React  = require('react');
var Router = require('react-router');

var AppLayout = require('client/layouts/app');
var Welcome = require('client/welcome');

module.exports = (
  <Router.Route handler={AppLayout}>
    <Router.Route name='welcome' path='/' handler={Welcome} />
  </Router.Route>
);
