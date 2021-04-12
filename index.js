const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
const jest = require('jest');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require('./src/page-template')
const path = require('path')


let employees = [];

async function init() {
    console.log('');
    console.log('TTTTTTT                              PPPPPP                 fff iii lll            GGGG                                       tt                  ');
    console.log('  TTT     eee    aa aa mm mm mmmm    PP   PP rr rr   oooo  ff       lll   eee     GG  GG   eee  nn nnn    eee  rr rr    aa aa tt     oooo  rr rr  ');
    console.log('  TTT   ee   e  aa aaa mmm  mm  mm   PPPPPP  rrr  r oo  oo ffff iii lll ee   e   GG      ee   e nnn  nn ee   e rrr  r  aa aaa tttt  oo  oo rrr  r ');
    console.log('  TTT   eeeee  aa  aaa mmm  mm  mm   PP      rr     oo  oo ff   iii lll eeeee    GG   GG eeeee  nn   nn eeeee  rr     aa  aaa tt    oo  oo rr     ');
    console.log('  TTT    eeeee  aaa aa mmm  mm  mm   PP      rr      oooo  ff   iii lll  eeeee    GGGGGG  eeeee nn   nn  eeeee rr      aaa aa  tttt  oooo  rr     ');
    console.log('');

    const response = await inquirer.prompt([
        {
            type: 'input',
            message: "You MUST enter a manager first. Enter manager's name: ",
            name: 'name'
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
            message: "Enter manager's office phone number (XXX-XXX-XXXX): ",
            name: 'officeNumber'
        }
])
    
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber);   
        employees.push(manager);
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
                name: 'extraInfo'
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
        err ? console.log(err) : console.log('');
        console.log("(¯`·._.··¸.-~*´¨¯¨`*·~-.,-(_ Check the 'dist' directory for your shiny new team profile! _)-,.-~*´¨¯¨`*·~-.¸··._.·´¯)") 
    })
}

init();