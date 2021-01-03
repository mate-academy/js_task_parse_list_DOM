'use strict';

const [...people] = document.querySelectorAll('li');
const employees = document.querySelector('ul');

function toNumber(line) {
  return line.toString().slice(1).split(',').join('');
}

function sortList(list, numerizer) {
  const sorted = list.sort((empl1, empl2) =>
    numerizer(empl2.dataset.salary) - numerizer(empl1.dataset.salary));

  employees.append(...sorted);
}

function getEmployees(list) {
  const arrayOfEmployees = [];

  for (const employee of list) {
    const worker = {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    arrayOfEmployees.push(worker);
  }

  return arrayOfEmployees;
}

sortList(people, toNumber);
getEmployees(people);
