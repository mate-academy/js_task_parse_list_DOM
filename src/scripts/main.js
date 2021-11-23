'use strict';

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map((employee) => ({
    name: employee.innerHTML.trim(),
    ...employee.dataset,
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  const convertSalary = (el) => (
    +el.salary.replace(/[$,]/g, '')
  );

  return employees.sort((a, b) => (
    convertSalary(b) - convertSalary(a)
  ));
}

const listOfEmployees = document.querySelector('ul');
const workers = sortList(listOfEmployees);

listOfEmployees.innerHTML = (`
    ${workers.map(employee => `
      <li
        data-position=" ${employee.position}"
        data-salary=" ${employee.salary}"
        data-age=" ${employee.age}"
      >
        ${employee.name}
      </li>
    `).join('')}
  `);
