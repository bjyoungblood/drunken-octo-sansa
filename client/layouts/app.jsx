/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

// Include bootstrap
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

// Include any custom template css here
require('assets/css/custom.css');
var MainLayout = React.createClass({

  render : function() {
    return (
      <div>
        <Router.RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = MainLayout;
