'use strict';

module.exports = function(server) {
  server.register(require('hapi-routes-status'))
    .catch(function(err) {
      if (err) {
        throw err;
      }
    });
};
