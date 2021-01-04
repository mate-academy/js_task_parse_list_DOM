'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((person1, person2) =>
    convertToNumber(person2.dataset.salary)
    - convertToNumber(person1.dataset.salary));

  listOfEmployees.append(...list);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

function convertToNumber(string) {
  return +string.split('$').join('').split(',').join('');
}

sortList(employees);
getEmployees(employees);
