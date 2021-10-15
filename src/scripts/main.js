'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getNumberFromString(string) {
  const number = Number(string.slice(1).split(',').join(''));

  return number;
}

function sortList(list) {
  const sorted = [...list]
    .sort((a, b) => getNumberFromString(b.dataset.salary)
    - getNumberFromString(a.dataset.salary));

  sorted.forEach(el =>
    document.querySelector('ul').appendChild(el));
}

function getEmployees(list) {
  const employees = [];

  for (const item of list) {
    employees
      .push(Object.assign({ name: item.textContent.trim() }, item.dataset));
  }

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
