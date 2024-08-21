/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
'use strict';

const employees = document.querySelectorAll('[data-salary]');
const mainList = document.querySelector('ul');

function convertToNum(string) {
  return +string.replace(/[$,]/g, '');
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertToNum(a.dataset.salary);
    const salaryB = convertToNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  const employees = items.map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: convertToNum(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };
  });

  return employees;
}

sortList(mainList);

getEmployees(mainList);
