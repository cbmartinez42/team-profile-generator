const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
const jest = require('jest');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require('./src/page-template')
const path = require('path')
// const Employee = require("./lib/Employee");

let employees = [];



// function init() {
//     addManager();
//     addEmployee();
     
// };


async function init() {
    // let manager = new Manager(response.name, response.id, response.email, response.officeNum);
    // let manager;
    // let name;
    // let title;
    // let id;
    // let email;
    // let officeNumber;
    const response = await inquirer.prompt([
        {
            type: 'input',
            message: "You MUST enter a manager first. Enter manager's name: ",
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
            name: 'officeNumber'
        }
])
        // function newManager(response){     
            let manager = new Manager(response.name, response.id, response.email, response.officeNumber);   
            // manager = `{name: ${response.name}, title: 'Manager', id: ${response.id}, email: ${response.email}, officeNumber: ${response.officeNumber}}`
            console.log(manager);
            employees.push(manager);
            // }
            console.log(employees);
        employeePrompt();
};

async function employeePrompt() {
    const {newEmployee} = await inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add a new employee? ',
            default: true,
            name: 'newEmployee'
        }
    ])
        if (newEmployee === true) {
            addEmployee();
        } else {
            renderHtml();
        }
}

async function addEmployee() {
    // let teamMember;
    const response = await inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name: ",
            name: 'name'
        },
        {
            type: 'list',
            message: "Select the team member's title: ",
            name: 'role',
            choices: ['Engineer', 'Intern'],
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
        let {name, role, id, email} = response;
        let addInfo = '';
        if (role === 'Engineer') {
            addInfo = 'Github profile';
        } else {
            addInfo = 'school name';
        }
        let {extraInfo} = await inquirer.prompt([
            {
                type: 'input',
                message: `Enter team member's ${addInfo}: `,
                name: 'addInfo'
        }])
        let teamMember;
        if (role === 'Engineer') {
            teamMember = new Engineer (name, id, email, extraInfo) // deleted role

        } else {
            teamMember = new Intern (name, id, email, extraInfo)
        }
        employees.push(teamMember)
        employeePrompt();
        
}

function renderHtml() {
    const dir = path.join(__dirname, '/dist')
    if (!fs.existsSync(dir)){

    fs.mkdir(dir, (err) => {
        if (err) {
            throw err;
        }
    })}
    fs.writeFile(path.join(dir, '/employees.html'), pageTemplate(employees), (err) => {
        err ? console.log(err) : console.log("(¯`·._.··¸.-~*´¨¯¨`*·~-.,-(_ Check the 'dist' directory for your shiny new README! _)-,.-~*´¨¯¨`*·~-.¸··._.·´¯)") 
    })
}

init();