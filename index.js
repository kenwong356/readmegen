// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can users use this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would one go about performing tests to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ["Apache", "GNU GPL v3", ,"BSD-3", "IPL", "MIT","Mozilla" ]
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${fileName} has been created successfully.`);
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
