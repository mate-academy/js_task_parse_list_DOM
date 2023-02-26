'use strict';

// write code here
const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function getSalary(worker) {
  return worker.dataset.salary.replace(/[$,]/g, '');
}

function sortList(people) {
  const sorted = people.sort((personA, personB) => (
    getSalary(personB) - getSalary(personA)
  ));

  list.append(...sorted);
};

function getEmployees(workers) {
  return workers.map(worker => ({
    name: worker.innerText,
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
