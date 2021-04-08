const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHTML');
const jest = require('jest');

const employees = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter Manager's name: ",
            name: 'manager'
        },
        {
            type: 'input',
            message: 'Employee ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: "Enter manager's email: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter manager's office phone number: ",
            name: 'phone'
        }
])
};

function addMember() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name: ",
            name: 'name'
        },
        {
            type: 'list',
            message: 'Select type of employee: ',
            choices: ['Engineer', 'Intern'],
            default: 0,
            name: 'type'
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
            message: "Enter member's Github profile: ",
            name: 'github'
        }
    ])
}
