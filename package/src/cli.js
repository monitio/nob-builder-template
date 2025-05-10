#!/usr/bin/env node

const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const git = simpleGit();

const repoUrl = 'https://github.com/monitio/nob-builder-template.git';
const targetDir = './nob-builder-template';

// Clone the repository
console.log('Cloning the repository...');
git.clone(repoUrl, targetDir)
  .then(() => {
    console.log('Repository cloned successfully!');

    // List of folders to remove
    const dirsToRemove = [
      path.join(targetDir, 'package'),
      path.join(targetDir, '.github'),
      path.join(targetDir, '.git')
    ];

    // Process each directory
    dirsToRemove.forEach(dir => {
      const name = path.basename(dir);
      if (fs.existsSync(dir)) {
        console.log(`Removing "${name}"...`);
        fs.rmSync(dir, { recursive: true, force: true });
      } else {
        console.log(`"${name}" folder not found, nothing to delete.`);
      }
    });

    // Exit once after all directories have been handled
    console.log('Cleanup complete. Exiting.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Failed to clone the repository.\n\nerror:\n\n', err);
    process.exit(1);
  });
