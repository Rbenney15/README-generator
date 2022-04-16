// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0'
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    default:
      return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return '';
  }else{}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ---
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.licensing}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
  `;
}
// use for importing Markdown in index 
module.exports = generateMarkdown;