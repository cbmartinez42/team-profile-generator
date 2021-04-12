// const fs = require('fs');

function createHtml(employees) {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-secondary mb-5">
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
return `  <div class="card col-sm-6 bg-primary bg-gradient" style="width: 26rem;">
                    <div class="card-body">
                        <h3 class="card-title text-center">${manager.getName()}</h3>
                        <h4 class="card-text text-center"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
                        <p class="card-text"><i class="fas fa-id-badge"></i>    ${manager.getId()}</p>
                        <p class="card-text"><i class="bi bi-envelope"></i> <a style="color: rgb(184, 181, 181)" href="mailto:${manager.getEmail()}">   ${manager.getEmail()}</a></p>
                        <p class="card-text"><i class="bi bi-telephone"></i>    ${manager.getOfficeNumber()}</p>
                    </div>
                </div>
    <div class="row justify-content-md-center">`
};

function createEngineer(engineer) {

    return `
        <div class="card col-sm-3 bg-success bg-gradient" style="width: 18rem; margin: 1rem">
        <div class="card-body">
            <h4 class="card-title text-center">${engineer.getName()}</h4>
            <h5 class="card-text text-center"><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</h5>
            <p class="card-text"><i class="fas fa-id-badge"></i>    ${engineer.getId()}</p>
            <p class="card-text"><i class="bi bi-envelope"></i> <a style="color: rgb(184, 181, 181)" href="mailto:${engineer.getEmail()}">  ${engineer.getEmail()}</a></p>
            <p class="card-text"><i class="bi bi-github"></i> <a style="color: rgb(184, 181, 181)" href="https://github.com/${engineer.getGithub()}" target="_blank">   ${engineer.getGithub()}</a></p>
        </div>
    </div>
  `
};

function createIntern(intern) {
    return `
        <div class="card col-sm-3 bg-warning bg-gradient" style="width: 18rem; margin: 1rem">
        <div class="card-body">
            <h4 class="card-title text-center">${intern.getName()}</h4>
            <h5 class="card-text text-center"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
            <p class="card-text"><i class="fas fa-id-badge"></i>    ${intern.getId()}</p>
            <p class="card-text"><i class="bi bi-envelope"></i> <a href="mailto:${intern.getEmail()}">  ${intern.getEmail()}</a></p>
            <p class="card-text"><i class="fas fa-school"></i>  ${intern.getSchool()}</p>
        </div>
    </div>
  `
};

function closeHtml() {
    return `</body>
    </html>`
}


module.exports = createHtml;