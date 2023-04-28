'use strict';

const liTags = document.querySelectorAll('[data-salary]');

function createNumber(salary) {
  return +salary.slice(1).replace(',', '');
}

function sortList(list) {
  const liItems = [...list];
  const ulTags = document.querySelector('ul');

  liItems.sort((a, b) =>
    createNumber(b.dataset.salary) - createNumber(a.dataset.salary));
  liItems.forEach(li => ulTags.append(li));
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    employees.push(
      {
        name: list[i].innerText,
        position: list[i].dataset.position,
        salary: list[i].dataset.salary,
        age: list[i].dataset.age,
      }
    );
  }
}

sortList(liTags);
getEmployees(liTags);
