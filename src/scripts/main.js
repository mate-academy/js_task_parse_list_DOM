'use strict';

const container = document.querySelector('ul');
const content = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  container.append(...list);
}

function toNumber(str) {
  return Number(str.slice(1).split(',').join(''));
}

function getEmployees(list) {
  const employees = [];

  for (const item of document.querySelectorAll('li')) {
    const person = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(person);
  }

  return employees;
}

sortList(content);
getEmployees(content);
