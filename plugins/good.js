'use strict';

var GoodConsole = require('good-console');

module.exports = function(server) {
  var reporters = [
    new GoodConsole({
      log : '*',
      response : '*',
      error : '*',
      ops : '*'
    })
  ];

  server.register({
    register : require('good'),
    options : {
      opsInterval : 30000,
      reporters : reporters
    },
  }).catch(function(err) {
    if (err) {
      throw err;
    }
  });
};
