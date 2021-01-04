'use strict';

const number = elem => elem.replace(/\D+/, '').split(',').join('');

const workersList = document.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((a, b) => number(b.dataset.salary) - number(a.dataset.salary))
    .forEach(worker => list.append(worker));
}

function getEmployees(list) {
  return [...list.children].map(worker => ({
    name: worker.innerText,
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

sortList(workersList);
getEmployees(workersList);
