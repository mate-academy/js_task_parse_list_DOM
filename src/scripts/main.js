'use strict';

const employersListElement = document.querySelector('ul');
const employersItemElement = document.querySelectorAll('li');

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(list) {
  const sortedList = [...list].sort((employeeA, employeeB) =>
    convertToNumber(employeeB.dataset.salary)
    - convertToNumber(employeeA.dataset.salary));

  employersListElement.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employersItemElement);
getEmployees(employersItemElement);
