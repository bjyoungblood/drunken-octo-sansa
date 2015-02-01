/** @jsx React.DOM */
'use strict';

var React = require('react');

var PublicLayout = React.createClass({

  render : function() {
    return (
      <div>
        <h3>Welcome to the demo application!</h3>
        <a className="btn btn-primary">Test</a>
      </div>
    );
  }
});

module.exports = PublicLayout;
