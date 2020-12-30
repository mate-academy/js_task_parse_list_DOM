'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(l) {
  const arr = [...l];

  for (const item of arr) {
    item.validSalary = item.dataset.salary.replace(/\D/g, '');
  }

  arr.sort((a, b) => {
    return b.validSalary - a.validSalary;
  });

  list.append(...arr);
}

function getEmployees(l) {
  const employees = [];

  [...l].forEach((element) => {
    employees.push({
      name: element.textContent.replace(/\n/g, '').trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return [employees];
}

sortList(items);
getEmployees(items);
