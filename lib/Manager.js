const inquirer = require('inquirer');
const fs = require('fs');

function generateManager() {
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

module.exports = generateEngineer;