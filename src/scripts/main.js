'use strict';

const employees = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const toNumber = (item) => {
  return +item.dataset.salary.replace(/[$,]/g, '');
};

function sortList(...list) {
  list.sort((a, b) => toNumber(b) - toNumber(a));

  ul.append(...list);
}

function getEmployees(...list) {
  const result = [];

  list.forEach((item) => {
    const employer = {};

    employer.name = item.textContent.trim();
    employer.position = item.dataset.position;
    employer.salary = item.dataset.salary;
    employer.age = item.dataset.age;

    result.push(employer);
  });

  return result;
}

sortList(...employees);
getEmployees(...employees);
