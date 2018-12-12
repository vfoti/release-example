const { execSync } = require('child_process');

execSync('git add .');
execSync('git commit -m "release"');
execSync('git push origin master');