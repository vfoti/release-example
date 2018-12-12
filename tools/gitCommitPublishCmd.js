const { execSync } = require('child_process');

execSync('git add .');
execSync('git commit -m "docs: release"');
execSync('git push origin master');