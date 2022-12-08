const fs = require('fs')

const templatePage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous" defer></script>
  </head>
  
  <body>
    <header>
      <h1 class="display-1 text-center">My Team</h1>
    </header>

    <main class="container d-flex justify-content-center flex-wrap gap-4"></main>
  </body>
</html>`

function resetHTML() {
    fs.writeFileSync('./dist/profiles.html', templatePage)
}

function getThirdItem(employee) {
    switch (employee.getRole()) {
        case 'Manager':
            return {
                thirdItemName: 'Office number',
                thirdItemValue: employee.getOfficeNumber()}
        case 'Engineer':
            return {
                thirdItemName: 'Github',
                thirdItemValue: `<a href="https://github.com/${employee.getGithub()}">github.com/${employee.getGithub()}</a>`}
        case 'Intern':
            return {
                thirdItemName: 'School',
                thirdItemValue: employee.getSchool()}
    }
}

function createEmployeeCard(employee) {
    let {thirdItemName, thirdItemValue} = getThirdItem(employee)
    return `
      <div class="card col-4">
        <h5 class="card-header text-center">${employee.getName()}</h5>
        <div class="card-body">
          <h5 class="card-title text-center">${employee.getRole()}</h5>
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li class="list-group-item">${thirdItemName}: ${thirdItemValue}</li>
          </ul>
        </div>
      </div>
`
}

function addEmployeeCard(employee) {
    let html = fs.readFileSync('./dist/profiles.html', encoding='utf8')
    html = html.split('</main>')
    html[0] += createEmployeeCard(employee)
    html = html.join(`    </main>`)
    fs.writeFileSync('./dist/profiles.html', html)
}

module.exports = { resetHTML, addEmployeeCard }