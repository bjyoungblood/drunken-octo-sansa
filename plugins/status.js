'use strict';

module.exports = function(server) {
  server.register(require('hapi-routes-status'))
    .catch((err) => {
      throw err;
    });
};
