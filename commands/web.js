'use strict';

var Hapi = require('hapi');
var Promise = require('bluebird');

Hapi.Server.prototype.register = Promise.promisify(Hapi.Server.prototype.register);

function startServer() {
  var server = new Hapi.Server({
    debug : false
  });

  server.connection({
    host : process.env.HOST,
    port : process.env.PORT,
  });

  require('plugins/auth')(server);
  require('plugins/good')(server);
  require('plugins/status')(server);

  server.start(function() {
    console.log(server.info);
  });
}

module.exports = function(program) {
  program
    .command('web')
    .description('start a web server')
    .action(startServer);
};
