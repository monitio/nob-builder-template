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

    // After cloning, remove the "package" folder
    const packageDir = path.join(targetDir, 'package');

    if (fs.existsSync(packageDir)) {
      fs.rmSync(packageDir, { recursive: true, force: true });
      console.log('"package" folder deleted successfully!');
    } else {
      console.log('"package" folder not found, nothing to delete.');
    }
  })
  .catch((err) => {
    console.error('Failed to clone the repository:', err);
  });
