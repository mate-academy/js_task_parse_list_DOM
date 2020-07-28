'use strict';

// write code here
function parseNumber(element) {
  const salary = element.dataset.salary;

  const item = salary.slice(1).split(',').join('');

  return Number.parseInt(item);
}

function sortList(ul) {
  const list = document.querySelectorAll('li');
  const arrayLi = [...list];

  arrayLi.sort((item1, item2) => parseNumber(item2) - parseNumber(item1));

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

const uls = document.querySelectorAll('ul');

sortList(uls[uls.length - 1]);

getEmployees();
