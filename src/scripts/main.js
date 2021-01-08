'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortPeopleBySalary(l) {
  const arr = [...l];

  arr.sort((a, b) => {
    return b.dataset.salary.replace(/\D/g, '')
      - a.dataset.salary.replace(/\D/g, '');
  });

  list.append(...arr);
}

function getEmployees(l) {
  const employees = [];

  [...l].forEach((element) => {
    employees.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return [employees];
}

sortPeopleBySalary(items);
getEmployees(items);
