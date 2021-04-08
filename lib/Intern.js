const inquirer = require('inquirer');
const fs = require('fs');

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name: ",
            name: 'name'
        },
        {
            type: 'input',
            message: 'Employee ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: "Enter member's email: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter intern's school: ",
            name: 'school'
        }
    ])
};