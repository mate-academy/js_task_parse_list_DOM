'use strict';

const listOfEmployees = document.querySelector('ul');

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map((employee) => ({
    name: employee.innerHTML.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function sortList(list) {
  const employees = [...list.children];

  const convertSalary = (el) => (
    +el.dataset.salary.replace(/[$,]/g, '')
  );

  const salary = employees.sort((a, b) => (
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
