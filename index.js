const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(writeToFile);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is required for installation to use your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Include instructions and examples to use your application.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Mention any collaborators, tutorials, or third-party apps used to create your project.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("README.md file successfully created!")
    });
};

async function init(){
    try {
        const userAnswers = await inquirer.prompt(questions);
        
        const markdown = generateMarkdown(userAnswers);

        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

init();
