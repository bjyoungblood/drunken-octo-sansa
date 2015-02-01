/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

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
