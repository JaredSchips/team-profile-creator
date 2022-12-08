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
]).then( managerInfo => {
    const otherInfo = menu()
})

function menu(choice='') {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to add an engineer, add an intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]).then(results => {
        choice = results.choice

        if (choice === 'Finish') { return }
        else if (choice === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's first name?"
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is the engineer's employee ID?"
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's email address?"
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is the engineer's github username?"
                },
            ]).then(answers => {
                menu()
            })
        }

        else if (choice === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the intern's first name?"
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is the intern's employee ID?"
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's email address?"
                },
                {
                    type: 'input',
                    name: 'internGithub',
                    message: "What is the intern's school name?"
                },
            ]).then(answers => {
                menu()
            })
        }
    })
}