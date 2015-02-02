'use strict';

module.exports = function(server) {

  var validate = function(decodedToken, callback) {
  };

  server.register(require('hapi-auth-jwt'))
    .then(() => {
      server.auth.strategy('token', 'jwt', {
        key : 'key',
        validateFunc : validate,
      });
    })
    .catch((err) => {
      throw err;
    });
};
