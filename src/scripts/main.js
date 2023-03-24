'use strict';

const employeesList = document.querySelector('ul');
const people = document.querySelectorAll('li');

employeesList.innerHTML = null;

const employees = [...people];

function formatSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

function sortList(list) {
  const employeesArray = getEmployees(list);

  const sortedEmployeesArray = employeesArray
    .sort((firstEl, secondEl) => secondEl.salary - firstEl.salary);

  for (const employee of sortedEmployeesArray) {
    employeesList.innerHTML += `
    <li
      data-position="${employee.position}"
      data-salary="${employee.salary}"
      data-age="${employee.age}"
    >${employee.name}</li>
  `;
  }
}

function getEmployees(list) {
  const employeesArray = [];

  for (const person of list) {
    const personObject = {
      name: person.innerText,
      position: person.dataset.position,
      salary: formatSalary(person.dataset.salary),
      age: person.dataset.age,
    };

    employeesArray.push(personObject);
  }

  return employeesArray;
}

sortList(employees);
