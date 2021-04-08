const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHTML');
const jest = require('jest');
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const employees = [];




function init() {
    addManager();
    addEmployee();
     
};


function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter Manager's name: ",
            name: 'name'
        },
        // {
        //     type: 'list',
        //     message: 'Select employee type (first type MUST be manager): ',
        //     choices: ['Manager', 'Engineer', 'Intern']
        // },
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
        .then(employeePrompt())
};

function employeePrompt() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add a new employee? ',
            default: true,
            name: 'newEmployee'
        }
    ])
        .then(if (newEmployee === true) {
            addEmployee()
        })
}

function addEmployee() {
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
        }])
        .then(function(({name, role, id, email})))
}


init();