'use strict';

const listOfEmployees = document.querySelectorAll('li');
const list = document.querySelector('ul');

function getNumberFromString(string) {
  return Number(string.slice(1).split(',').join(''));
}

function sortList(listItems) {
  const sortedList = [...listItems]
    .sort((a, b) => getNumberFromString(b.dataset.salary)
      - getNumberFromString(a.dataset.salary));

  list.append(...sortedList);
}

function getEmployees(table) {
  const employees = table.map(listItem => Object.assign({
    name: listItem.textContent.trim(),
  }, listItem.dataset));

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
