'use strict';

module.exports = function(program) {
  program
    .command('migrate [action]')
    .description('manage database migrations')
    .action(function(cmd, options) {
      // Perform, rollback, or create a database migration
    });
};
