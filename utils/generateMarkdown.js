// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// var answers = require("../index.js")

// MIT : [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// GPL 3 : [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
// Apache : [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// BSD : [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

var licImg;
var licLink;
var licEl;

const license = [
    { 
      name: "MIT",
      img: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      link: "https://opensource.org/licenses/MIT",
    },    
    {
      name: "GPL",
      img: "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
      link: "https://www.gnu.org/licenses/agpl-3.0",
    },
    {
      name: "Apache",
      img: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
      link: "https://opensource.org/licenses/Apache-2.0",
    },
    {
      name: "BSD",
      img: "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
      link: "https://opensource.org/licenses/BSD-3-Clause",
    },
    {
      name: "None",
      img: "",
      link: "",
    },
  ];


function renderLicenseBadge() {
  license.forEach(function(){
   if (license.name === answers.license) {
     licImg =  license.img;
   };
  }
  )};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  license.forEach(function(){
  if (license.name === answers.license) {
    licLink = license.link;
  };
}
)};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
 // renderLicenseBadge(answers);
 // renderLicenseLink(answers);
   licEl = `${licImg} <a href="${licLink}>${licLink}</a>`
}
// renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // renderLicenseBadge(answers);
  // renderLicenseLink(answers);

  // renderLicenseSection(answers)

  return `# ${answers.title}
  ## DESCRIIPTION
  ${answers.description}
  ## Table of Contents

  ## Installation
  ${answers.install}
  </p>
  ## Usage
  ${answers.usage}
  ## License
  ${licEl}
  ## Contributing
  ${answers.contribute}
  ## Tests
  ${answers.tests}
  ## Questions:
  Contact me for questions:
  GitHub: <a href="https://github.com/${answers.github}">${answers.github}</a>
  Email: <a href="mailto:${answers.email}>${answers.email}</a>
`;
}

module.exports = generateMarkdown;
