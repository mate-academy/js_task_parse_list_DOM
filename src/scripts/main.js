'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const normalisedSalary = (str) => +str.slice(1).split(',').join('');

function sortList(array) {
  array.sort((a, b) => normalisedSalary(b.dataset.salary)
    - normalisedSalary(a.dataset.salary));

  list.append(...array);
}

function getEmployees(array) {
  return array.map(el => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
