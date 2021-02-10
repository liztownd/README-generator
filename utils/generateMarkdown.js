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
      img: "There is no license for this project",
      link: "",
    },
  ];


function renderLicenseBadge(answers) {
  license.forEach(function(item){
   if (item.name === answers.license) {
     licImg =  item.img;

   };
  }
  )



};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  license.forEach(function(item){

  if (item.name === answers.license) {
    licLink = item.link;
    
  };
}
)
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  renderLicenseLink(answers);
  renderLicenseBadge(answers);

  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents

  -[Installation](#Installation)\n
  -[Usage](#Usage)\n
  -[License](#License)\n
  -[Contributing](#Contributing)\n
  -[Testing](#Testing)\n
  -[Questions](#Questions)\n

  ## Installation

  ${answers.install} 
  
  ## Usage

  ${answers.usage}

  ## License

  Click badge for license info:\n
  <a href="${licLink}">${licImg}</a>
 

  ## Contributing
  
  ${answers.contribute}

  ## Testing

  ${answers.tests}

  ## Questions:

  Contact me for questions:\n
  GitHub Profile: https://github.com/${answers.github}\n
  Email: <a href="mailto:${answers.email}"> ${answers.email}</a>\n
`;
}

module.exports = generateMarkdown;
