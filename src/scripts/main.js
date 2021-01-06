'use strict';

const employees = document.querySelector('ul');

function toNumber(str) {
  return Number(str.slice(1).split(',').join(''));
}

function sortList(list) {
  return [...list.children].sort((first, second) =>
    toNumber(second.dataset.salary) - toNumber(first.dataset.salary));
}

employees.append(...sortList(employees));

function getEmployees(list) {
  return [...list.children].map(obj => {
    return {
      name: obj.textContent.trim(),
      position: obj.dataset.position,
      salary: obj.dataset.salary,
      age: obj.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
