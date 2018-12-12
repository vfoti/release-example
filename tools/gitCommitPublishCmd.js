const argv = require('yargs').argv
const { execSync } = require('child_process');
let commitMessage = 'docs: release';

if(argv.m){
  commitMessage = argv.m;
}

execSync('git add .');
execSync(`git commit -m "${commitMessage}"`);
execSync('git push origin master');