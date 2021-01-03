'use strict';

const workersList = document.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(item => list.append(item));
}

const toNumber = elem => Number(elem.slice(1).split(',').join(''));

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
