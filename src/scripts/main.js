'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];
const sal = (item) => +item.slice(1).split(',').join('');

function sortEmployees(arr) {
  const sorted = arr.sort((a, b) => {
    return sal(b.dataset.salary) - sal(a.dataset.salary);
  });

  list.append(...sorted);
};

function getEmployees(arr) {
  return arr.map(({ innerText, dataset: { position, salary, age } }) => {
    return {
      name,
      position,
      salary,
      age,
    };
  });
}

sortEmployees(employees);
getEmployees(employees);
