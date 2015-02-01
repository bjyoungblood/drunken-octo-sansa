'use strict';

var fork = require('child_process').fork;

module.exports = function(program) {
  program
    .command('migrate <action...>')
    .description('manage database migrations')
    .action(function(cmd, options) {
      fork('node_modules/.bin/pg-migrate', cmd, {
        cwd : process.cwd(),
        stdio : 'inherit',
        env : {
          DATABASE_URL : process.env.POSTGRES_URL,
          NODE_ENV : process.env.NODE_ENV,
        }
      });
    });
};
