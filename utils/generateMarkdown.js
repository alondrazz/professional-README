// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[Apache Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      return ''; 
}
}
const apacheBadge = renderLicenseBadge('Apache');
console.log(apacheBadge);


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch ( license) {
    case 'Apache':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      default:
        return '';
  }
}
const apacheLicenseLink = renderLicenseLink('Apache');
console.log(apacheLicenseLink);
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return `
      ## License 
      
      This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
     `;
     
     default:
      return '';
  }
}
const licenseSection = renderLicenseSection('Apache');
console.log(licenseSection);
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ## Table of Contents
      [Installation](#installation)
      [Usage](#usage)
      [Credits](#credits)
      [License](#license)

  ## Installation

  ## Usage

  ## Credits

  ## License 
  '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';

  ## Badges
[Apache Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';

## Features

## How to Contribute

## Tests
`;
}

const userProjectData = {
  title: 'My project',
  description: 'A description of my project',
  installation: 'Instructions on how to install the project',
  usage: ' Guideline on how to use the project',
  license: 'Apache',
  email: 'your.email@example.com',
  username: 'your-username'
};

const readmeContent = generateMarkdown(userProjectData);
console.log(readmeContent);
module.exports = generateMarkdown;
