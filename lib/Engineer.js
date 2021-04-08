const inquirer = require('inquirer');
const fs = require('fs');

function addEngineer() {
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
            message: "Enter member's Github profile: ",
            name: 'github'
        }
    ])
};


function writeToFile(fileName, data) {
    const dir = './dist';
    fs.mkdir(dir, (err) => {
        if (err) {
            throw err;
        }
    })
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err) : console.log("(¯`·._.··¸.-~*´¨¯¨`*·~-.,-(_ Check the 'dist' directory for your team's profile! _)-,.-~*´¨¯¨`*·~-.¸··._.·´¯)") }
);  
};

module.exports = generateEngineer;