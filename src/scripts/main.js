'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function callBackToSort(a, b) {
  const firstArgument = +(a.dataset.salary
    .split('$')
    .join('')
    .split(',')
    .join(''));
  const secondArgument = +(b.dataset.salary
    .split('$')
    .join('')
    .split(',')
    .join(''));

  return secondArgument - firstArgument;
}

function sortList(list) {
  const sortedList = [...list].sort(callBackToSort);

  listOfEmployees.append(...sortedList);
}

function getEmployees(listEmployees) {
  return listEmployees.map(person => ({
    name: person.innerText,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}
sortList(employees);
getEmployees(employees);
