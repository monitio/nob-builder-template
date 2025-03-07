#!/usr/bin/env node

const https = require('https');
const { exec } = require('child_process');

// List of URLs to check
const urls = [
  'https://www.npmjs.com/~beans-jamesdev-xyz',
  'https://www.npmjs.com/package/create-nobuild',

  'https://github.com',
  'https://github.com/monitio',
  'https://github.com/monitio/nob-builder-template',
];

// Function to check if a URL is reachable
function ping(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(`Error: Received status code ${res.statusCode} from ${url}`);
      }
    }).on('error', (err) => {
      reject(`Error: ${err.message} when trying to reach ${url}`);
    });
  });
}

// Function to get the latest version of npm
function getLatestNpmVersion() {
  return new Promise((resolve, reject) => {
    exec('npm show create-nobuild version', (err, stdout, stderr) => {
      if (err || stderr) {
        reject('Error fetching npm version');
      } else {
        resolve(stdout.trim());  // Remove extra whitespace
      }
    });
  });
}

// Check if all URLs are reachable
async function checkUrls() {
  // Clear the terminal screen
  console.clear();

  // Fetch and print the latest npm version
  try {
    const latestVersion = await getLatestNpmVersion();
    console.log(`create-nobuild@latest: ${latestVersion}`);
  } catch (error) {
    console.error('Failed to fetch the latest npm version:', error);
    process.exit(1); // Exit if we can't get the version
  }

  console.log('------\n');

  // Proceed to check URLs
  for (const url of urls) {
    try {
      await ping(url);
    } catch (error) {
      console.error(error);
      process.exit(1); // Exit the script if any URL is not reachable
    }
  }

  // Proceed if all URLs are reachable
  console.log('All URLs are responsive.');
  console.log('Continuing with the main script.')
  console.log('\n------\n');
  require('./cli.js');  // Run the cli.js script after the URL checks pass
}

// Run the URL checks
checkUrls();
