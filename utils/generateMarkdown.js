// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  
      case 'GNU GPL v3':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
         
      case 'BSD-3':
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  
      case 'IPL':
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
      case 'Mozilla':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  
      default:
        return "";
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license) {
  switch (license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'

    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0'
    
    case 'BSD-3':
      return 'https://opensource.org/licenses/IPL-1.0'

    case 'IPL':
      return 'https://opensource.org/licenses/IPL-1.0'

    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    
    case 'Mozilla':
      return 'https://opensource.org/license/mpl-2-0/'


    default:
      return "";
  }
} else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License

    ${license}
    - [${license}](${renderLicenseLink(license)}).
    `;

  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
