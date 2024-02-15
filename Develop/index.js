// Declaring dependencies and variables


// Dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")



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
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "BSD 3-Clause") {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      return "";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache 2.0") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "BSD 3-Clause") {
      return "https://opensource.org/licenses/BSD-3-Clause";
    } else {
      return "";
    }
  }
  
  //Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "None") {
      return "";
    } else {
      return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`;
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