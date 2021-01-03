'use strict';

const workersList = document.querySelector('ul');

const toNumber = elem => Number(elem.slice(1).split(',').join(''));

function sortList(list) {
  [...list.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(item => list.append(item));
}

function getEmployees(list) {
  return [...list.children]
    .map(employee => ({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
}

sortList(workersList);
getEmployees(workersList);
