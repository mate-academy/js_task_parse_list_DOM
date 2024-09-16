'use strict';

const elements = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function transformationSalary(str) {
  return +str.slice(1).replaceAll(',', '');
}

function sortList(arr) {
  arr.sort((a, b) => transformationSalary(b.dataset.salary)
  - transformationSalary(a.dataset.salary));
  list.append(...arr);
}

function getEmployees(arr) {
  return arr.map(({ innerText, dataset: { position, salary, age } }) => {
    return {
      innerText,
      position,
      salary,
      age,
    };
  });
}

sortList(elements);
getEmployees(elements);
