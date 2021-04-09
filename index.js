const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
const jest = require('jest');
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const employees = [];



// function init() {
//     addManager();
//     addEmployee();
     
// };


async function init() {
    let manager;
    let name;
    let title;
    let id;
    let email;
    let phone;
    await inquirer.prompt([
        {
            type: 'input',
            message: "You must enter a manager first. Enter manager's name: ",
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
            message: "Enter manager's office phone number (XXX-XXX-XXXX): ",
            name: 'phone'
        }
])
        manager = {name: name, title: 'Manager', id: id, email: email, phone: phone}
        console.log(manager)
        employees.push(manager)
        .then(employeePrompt())
};

async function employeePrompt() {
    await inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add a new employee? ',
            default: true,
            name: 'newEmployee'
        }
    ])
        if (newEmployee === true) {
            addEmployee()
        } else {
            renderHtml()
        }
}

async function addEmployee() {
    let teamMember;
    await inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name: ",
            name: 'name'
        },
        {
            type: 'list',
            message: "Select the team member's title: ",
            name: 'title',
            options: ['Engineer', 'Intern'],
            default: 0
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
        }
    ])
    .then (async function({name, title, id, email}) {
        let addInfo = '';
        if (title === 'Engineer') {
            addInfo = 'Github profile';
        } else {
            addInfo = 'school name';
        }
        await inquirer.prompt([
            {
                type: 'input',
                message: `Enter team member's ${addInfo}: `,
                name: 'addInfo'
        }])
        teamMember = {name, title, id, email, addInfo}
        employees.push(teamMember)
        employeePrompt();
    })
        
}

function renderHtml() {

}

init();