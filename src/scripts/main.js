'use strict';

const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

function sortList(list) {
  const copy = [...list];
  const sorted = copy.sort((a, b) =>
    converter(b) - converter(a));

  ul.append(...sorted);

  return sorted;
}

function converter(item) {
  return item.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(list) {
  const listOfEmployees = list.map(employee => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return listOfEmployees;
}

sortList(li);
getEmployees(li);
