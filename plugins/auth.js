'use strict';

module.exports = function(server) {

  var validate = function(decodedToken, callback) {
  };

  server.register(require('hapi-auth-jwt'))
    .then(function() {
      server.auth.strategy('token', 'jwt', {
        key : 'key',
        validateFunc : validate,
      });
    })
    .catch(function(err) {
      throw err;
    });
};
