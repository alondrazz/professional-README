// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
console.log("it works");
// TODO: Create an array of questions for user input
function renderLicenseBadge(license) {
    console.log('Generating badge for license:', license);
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        default:
            return '';
    }
}
const questions = [
    {
        type: 'checkbox',
        message: 'Select sections to include in Table of Contents:',
        name: 'tableOfContents',
        choices: [
            {
                name: 'title',
            },
            {
                name: 'description',
            },
            {
                name: 'installation',
            },
            {
                name: 'usage',
            },
            {
                name: 'contributing',
            },
            {
                name: 'test',
            },
            {
                name: 'license',
            }
        ]
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of youre project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If applicable, describe the steps required to install your project for the Installation section.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide istructions and examples of your project in use for the Usage section',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If applicable, provide guidelines on how other developers can contrubute to your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their Github profiles.',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'If applicable, provide any test written for youre application and provide examples on how to run them.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['GNU LGPv3', 'Apache License 2.0', 'MIT License'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
    }

];

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log('User answers:', answers);

            const readmeContent = `
  # ${answers.title}
  
  ${renderLicenseBadge(answers.license)}
  
  ## Description 
  ${answers.description}

    ## Table of Contents
    ${answers.tableOfContents.includes('title') ? '- [Title](#title)\n' : ''}
    ${answers.tableOfContents.includes('description') ? '- [Description](#description)\n' : ''}
    ${answers.tableOfContents.includes('installation') ? '- [Installation](#installation)\n' : ''}
    ${answers.tableOfContents.includes('usage') ? '- [Usage](#usage)\n' : ''}
    ${answers.tableOfContents.includes('contributing') ? '- [Contributing](#contributing)\n' : ''}
    ${answers.tableOfContents.includes('test') ? '- [Test](#test)\n' : ''}
    ${answers.tableOfContents.includes('license') ? '-[License](#license)\n' : ''}


    ## Insallation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Credits
    ${answers.credits}

    ## Contributing
    ${answers.contributing}

    ## Test
    ${answers.test}

    ## License
    ${answers.license}

    ## Badges
    ${renderLicenseBadge(answers.license)}

    ## Questions
    If you have any questions about this project, you can reach out to me at:
    - GitHub: [${answers.username}](https://github.com/${answers.username})
    - Email: [${answers.email}](mailto:${answers.email})
    `;

            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Erros writing file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
}
// Function call to initialize app
init();

