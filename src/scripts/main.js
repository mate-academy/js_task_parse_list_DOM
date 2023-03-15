'use strict';

const listEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

const toNumber = item => item.slice(1).split(',').join('');

function sortList(list) {
  const result = [...list]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  listEmployees.append(...result);
};

function getEmployees(list) {
  return [...list].map(({ innerText, dataset: { position, salary, age } }) => ({
    name: innerText,
    position,
    salary,
    age,
  }));
};

sortList(employees);
getEmployees(employees);
