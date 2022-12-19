'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const listToNumber = salary => +salary.slice(1).split(',').join('');

  const sorted = list.sort((a, b) =>
    listToNumber(b.dataset.salary) - listToNumber(a.dataset.salary));

  listOfEmployees.append(...sorted);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
