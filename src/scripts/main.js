'use strict';

function sortBySalary(employees) {
  return employees.sort((current, next) => (
    next.salary.replace(/[$,]/g, '') - current.salary.replace(/[$,]/g, '')
  ));
}

function getEmployeeObjects(employees) {
  return [...employees].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

const list = document.querySelector('ul');
const people = document.querySelectorAll('li');
const employeeObjects = getEmployeeObjects(people);
const sortedBySalary = sortBySalary(employeeObjects);

list.innerHTML = sortedBySalary.map(employee => `
  <li
    data-position=${employee.position}
    data-salary=${employee.salary}
    data-age=${employee.age}
  >
    ${employee.name}
  </li>
`).join('');
