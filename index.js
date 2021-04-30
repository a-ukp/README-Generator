// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'github-name',
        message: 'What is your Github name?',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {prompt(questions).then(answers => generateMarkdown(answers))}

// Function call to initialize app
init();
