// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
       const questions = 
       [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a brief description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "What are installation instructions for your project?",
            name: "install",
        },
        {
            type: "input",
            message: "Describe how to use your project:",
            name: "usage",
        },
        {
            type: "list",
            message: "What is the license for your project?",
            name: "license",
            choices: ["MIT", "GPL", "Apache", "BSD", "none"],
        },
        {
            type: "input",
            message: "How can I contribute to this project?",
            name: "contribute",
        },
        {
            type: "input",
            message: "What kind of testing have you done?",
            name: "tests",
        },
        {
            type: "input",
            message: "What is your Git Hub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log('Successfully created Readme!')
    );
};

// TODO: Create a function to initialize app
    function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {

        console.log(answers);
         writeToFile(answers.title, generateMarkdown(answers));
    


});
    };

// Function call to initialize app
init()
