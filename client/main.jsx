/* global document */
'use strict';

var React  = require('react');
var router = require('client/router');

// Initializing touch events
React.initializeTouchEvents(true);

document.addEventListener('DOMContentLoaded', function() {
  router.run(function startApplication(Handler, state) {
    React.render(
      <Handler params={state.params} query={state.query} />,
      document.getElementById('app-container')
    );
  });
});
