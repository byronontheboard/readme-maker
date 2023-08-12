// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "firstName",
    message: "What is your first name?",
  },

  {
    type: "input",
    name: "lastName",
    message: "What is your last name?",
  },

  {
    type: "input",
    name: "projectTitle",
    message: "What name would you like to assign this project?",
  },

  {
    type: "input",
    name: "projectDescription",
    message: "Could you please give a brief description about your project?",
  },

  {
    type: "input",
    name: "projectInstall",
    message: "What are the instructions for installation?",
  },

  {
    type: "input",
    name: "projectUsage",
    message: "How is this project utilized?",
  },

  {
    type: "input",
    name: "projectContribution",
    message: "How can others contribute to this project?",
  },

  {
    type: "input",
    name: "projectTest",
    message: "How can this project be tested?",
  },

  {
    type: "input",
    name: "questions",
    message: "Do you have any questions regarding this project?",
  },

  {
    type: "input",
    name: "userGitHub",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "userEmail",
    message: "What is your preferred email address?",
  },

  {
    type: 'list',
    message: 'What license is being utilizied?',
    name: 'license',
    choices: [
        {
            name: 'The Unlicense',
            value: 'unlicense',
            description: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.yarn is an awesome package manager',
        },
        {
            name: 'MIT License',
            value: 'MIT',
            description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        }
    ]},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing README file:", err);
    } else {
      console.log(`README file (${fileName}) created successfully!`);
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the content of the README file using the user's answers
      const readmeContent = generateReadmeContent(answers);

      // Write the content to the README file
      writeToFile("README.md", readmeContent);
    })
    .catch((err) => {
      console.error("Error occurred while prompting questions:", err);
    });
};

// Function to generate the content of the README file based on user answers
function generateReadmeContent(answers) {
  return `
# ${answers.projectTitle}

${answers.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation

${answers.projectInstall}

## Usage

${answers.projectUsage}

## Contribution

${answers.projectContribution}

## Testing

${answers.projectTest}

## Questions

If you have any questions regarding this project, please contact ${answers.firstName} ${answers.lastName} at ${answers.userEmail}. You can also find more of their work on GitHub: [${answers.userGitHub}](https://github.com/${answers.userGitHub})

## License

This project is licensed under the ${answers.license} license.
`;
};

// Function call to initialize app
init();
