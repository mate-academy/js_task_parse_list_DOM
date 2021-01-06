'use strict';

const listUl = document.querySelector('ul');
const listCollection = document.querySelectorAll('li');

function sortList(list) {
  const listNew = [...list].sort((a, b) =>
    b.dataset.salary.split(',').join('').slice(1)
    - a.dataset.salary.split(',').join('').slice(1));

  listUl.append(...listNew);
}

function getEmployees(list) {
  const employees = [...list]
    .map(employee => ({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));

  return employees;
}

sortList(listCollection);
getEmployees(listCollection);
