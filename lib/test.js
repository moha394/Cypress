const path = require('path');

const shell = require('shelljs');


shell.exec(`./node_modules/.bin/mochawesome-merge ~/tmp/mochawesome-report/*.json>~/tmp/mochawesome-report/output.json`, (code, stdout, stderr) => {
    if (stderr) {
      console.log(stderr);
    } else {
      console.log('Success!');
    }
});