// Declaring dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme.js")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the questions to populate into the README.md
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// Asynchronous function to write to readme
async function init() {
    try {
        // ask user questions and lock in answers
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✅ Successfull README');
    } catch (error) {
        console.log(error);
    }
}

init();

// Dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme.js");

// Promisifying writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user for project details
async function promptUser() {
    try {
        return await inquirer.prompt([
            {
                type: "input",
                name: "projectTitle",
                message: "Project Title:"
            },
            {
                type: "input",
                name: "description",
                message: "Project Description:"
            },
            {
                type: "input",
                name: "installation",
                message: "Installation Instructions:"
            },
            {
                type: "input",
                name: "usage",
                message: "Usage Information:"
            },
            {
                type: "list",
                name: "license",
                message: "License:",
                choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
            },
            {
                type: "input",
                name: "contributing",
                message: "Contributors:"
            },
            {
                type: "input",
                name: "tests",
                message: "Tests:"
            },
            {
                type: "input",
                name: "questions",
                message: "Questions or Issues:"
            },
            {
                type: "input",
                name: "username",
                message: "GitHub Username:"
            },
            {
                type: "input",
                name: "email",
                message: "Email Address:"
            }
        ]);
    } catch (error) {
        console.log(error);
    }
}

// Function to generate README
async function init() {
    try {
        const answers = await promptUser();
        // Generate README content
        const readmeContent = generateReadme(answers);
        await writeFileAsync('./dist/README.md', readmeContent);
        console.log('✅ Successfully generated README.md');
    } catch (error) {
        console.log(error);
    }
}

init();
