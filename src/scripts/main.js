'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getNumberFromString(string) {
  return Number(string.slice(1).split(',').join(''));
}

function sortList(listItems) {
  const sortedList = [...listItems]
    .sort((a, b) => getNumberFromString(b.dataset.salary)
      - getNumberFromString(a.dataset.salary));

  const listing = document.querySelector('ul');

  listing.append(...sortedList);
}

function getEmployees(list) {
  const employees = list.map(listItem => Object.assign({
    name: listItem.textContent.trim(),
  }, listItem.dataset));

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
