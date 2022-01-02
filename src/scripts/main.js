'use strict';

const listOfEmployees = document.querySelector('ul');

function convertSalary(salary) {
  return +(salary).replace(/[$,]/g, '');
}

function sortList(list) {
  return [...list.children].sort((a, b) =>
    convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary))
    .map(employee => listOfEmployees.append(employee));
}

function getEmployees(list) {
  return [...list.children].map(employee =>
    ({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: convertSalary(employee.dataset.salary),
      age: +(employee.dataset.age),
    }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
