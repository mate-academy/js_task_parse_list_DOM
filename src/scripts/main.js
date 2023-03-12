'use strict';

const listEmployees = document.querySelector('ul')
const employees = document.querySelectorAll('li');

const toNumber = item => item.slice(1).split(',').join('');

function sortList(list) {
  const result = [...list].sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  listEmployees.append(...result);
};

function getEmployees(list) {
  return [...list].map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(employees);
getEmployees(employees);
