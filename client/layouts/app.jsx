/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

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
