#!/usr/bin/env node
'use strict';

// Validate environment

try {
  require('assert-env')([
    'NODE_ENV',
    'POSTGRES_URL',
    'JWT_SECRET',
    'HOST',
    'PORT',
  ]);
} catch (err) {
  console.error(err.message.substr(0, err.message.length - 1));
  process.exit(1);
}

var program = require('commander');

program.version(require('./package.json').version);

program
  .command('web')
  .description('start a web server')
  .action(function(cmd, options) {
    require('./server');
  });

program.parse(process.argv);

if (! process.argv.slice(2).length) {
  program.outputHelp();
}