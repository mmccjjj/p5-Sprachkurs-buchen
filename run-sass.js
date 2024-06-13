const { execSync } = require('child_process');
const path = require('path');

const srcPath = path.resolve('src/scss');
const destPath = path.resolve('build/css');

const command = `sass --watch "${srcPath}:${destPath}"`;

try {
    execSync(command, { stdio: 'inherit' });
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}