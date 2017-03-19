#!/usr/bin/env node
var program = require('commander');
var seneca = require('./seneca.js');

program
  .option('-v, --verify <email>', 'verifys the email address given as a Seneca email')
  .option('-f, --format <name>', 'formats the name given as a Seneca email')
  .parse(process.argv);

if (program.verify) console.log(seneca.isValidEmail(program.verify));
if (program.format) console.log(seneca.formatSenecaEmail(program.format));
