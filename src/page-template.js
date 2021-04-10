const fs = require('fs');

function createHtml(employees) {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-success mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
    </nav>
    <div class="container">
        <div class="row justify-content-md-center">
            `;
        html += createMgr(employees[0])
        for (let i = 1; i < employees.length; i++) {
            if (employees[i].getRole() === 'Engineer') {
                html += createEngineer(employees[i])
            } else {
                html += createIntern(employees[i])
            }
        } html += closeHtml();
        return html
}; 

function createMgr(manager) {
return `  <div class="card col-sm-6" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>${manager.getName()}</b></h5>
                            <p class="card-text"><b>${manager.getRole()}</b></p>
                            <p class="card-text">Employee ID: ${manager.getId()}</p>
                            <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                            <p class="card-text">Office Phone: ${manager.getOfficeNumber()}</p>
                    </div>
                </div>
    <div class="row justify-content-md-center">`
};

function createEngineer(engineer) {

    return `
        <div class="card col-sm-3" style="width: 18rem; margin: 1rem">
        <div class="card-body">
            <h5 class="card-title"><b>${engineer.getName()}</b></h5>
                <p class="card-text"><b>${engineer.getRole()}</b></p>
                <p class="card-text">Employee ID: ${engineer.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="card-text">Github Profile: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
    </div>
  `
};

function createIntern(intern) {
    return `
        <div class="card col-sm-3" style="width: 18rem; margin: 1rem">
        <div class="card-body">
            <h5 class="card-title"><b>${intern.getName()}</b></h5>
                <p class="card-text"><b>${intern.getRole()}</b></p>
                <p class="card-text">Employee ID: ${intern.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
    </div>
  `
};

function closeHtml() {
    return `</body>
    </html>`
}


module.exports = createHtml;