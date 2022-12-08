const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's first name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?"
    },
])