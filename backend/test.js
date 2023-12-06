const execSync = require('child_process').execSync;

const output = execSync('ls');

console.log(output)