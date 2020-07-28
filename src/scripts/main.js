'use strict';

// write code here
function parseNumber(elementA, elementB) {
  const salaryA = elementA.dataset.salary;
  const salaryB = elementB.dataset.salary;

  const item1 = salaryA.split('').splice(1).join('').split(',').join('');
  const item2 = salaryB.split('').splice(1).join('').split(',').join('');

  return Number.parseInt(item2) - Number.parseInt(item1);
}

function sortList(ul) {
  const list = document.querySelectorAll('li');
  const arrayLi = [...list];

  arrayLi.sort((item1, item2) => parseNumber(item1, item2));

  for (let i = 0; i < arrayLi.length; i++) {
    ul.append(arrayLi[i]);
  }
}

function getEmployees() {
  const employees = [];
  const list = document.querySelectorAll('li');

  for (const emploe of [...list]) {
    employees.push({
      name: emploe.innerText,
      position: emploe.dataset.position,
      salary: emploe.dataset.salary,
      age: emploe.dataset.age,
    });
  }

  return employees;
}

const uls = document.getElementsByTagName('ul');

sortList(uls[uls.length - 1]);

getEmployees();
