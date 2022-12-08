const fs = require('fs')

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

module.exports = addEmployeeCard