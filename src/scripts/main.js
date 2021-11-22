'use strict';

const listOfEmployees = document.querySelector('ul');

function getEmployees(list) {
  const employees = [...list.children];

  return employees;
}

function sortList(list) {
  const convertSalary = (el) => (
    +el.dataset.salary.replace(/[$,]/g, '')
  );

  const salary = getEmployees(listOfEmployees).sort((a, b) => (
    convertSalary(b) - convertSalary(a)
  ));

  list.innerHTML = `
    ${salary.map(employee => `
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

getEmployees(listOfEmployees);
sortList(listOfEmployees);
