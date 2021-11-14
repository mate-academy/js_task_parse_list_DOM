'use strict';

const listOfEmployees = document.querySelector('ul');

function getEmployees(listOfEmployees) {
  const employees = [];

  for (const employee of listOfEmployees.children) {
    employees.push(employee);
  }

  return employees;
}

function sortList(listOfEmployees) {
  const getSalary = (employee) => +employee.dataset.salary.replace(/[$,]/g, '');

  const sortedEmployees = getEmployees(listOfEmployees).sort(
    (employeeA, employeeB) => getSalary(employeeB) - getSalary(employeeA)
  );

  listOfEmployees.innerHTML = `
    ${sortedEmployees.map(employee => `
      <li
        data-position="${employee.dataset.position}"
        data-salary="${employee.dataset.salary}"
        data-age="${employee.dataset.age}"
      >
        ${employee.innerText}
      </li>
    `).join('')}
  `;
}

sortList(listOfEmployees);
