'use strict';

// write code here
const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

const ToInt = (element) => {
  return Number(element.dataset.salary.replace(/[$,]/g, ''));
};

function sortList(...array) {
  array.sort((a, b) => {
    return ToInt(b) - ToInt(a);
  });

  list.append(...array);
}

function getEmployees(...array) {
  const result = [];

  array.forEach((element) => {
    const employer = {};

    employer.name = element.textContent.trim();
    employer.position = element.dataset.position;
    employer.salary = element.dataset.salary;
    employer.age = element.dataset.age;

    result.push(employer);
  });

  return result;
}

sortList(...items);
getEmployees(...items);
