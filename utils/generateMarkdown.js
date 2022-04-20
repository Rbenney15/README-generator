// Rednering License Badge Function
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![license](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'GNU':
      return '![license](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
    case 'Apache':
      return '![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    default:
      return
  }
};

// Render License Link Function
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'GNU':
      return 'https://www.gnu.org/licenses/agpl-3.0'
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    default:
      return ''
  }   
};

// Render License Section Function
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return `Licensed under [MIT](${renderLicenseLink(license)})`
    case 'GNU':
      return `Licensed under [GNU](${renderLicenseLink(license)})`
    case 'Apache':
      return `Licensed under [Apache](${renderLicenseLink(license)})`
    default:
      return ''
  }    
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Licensing:
  ${renderLicenseBadge(data.licensing)}
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
  ${renderLicenseSection(data.licensing)}
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