'use strict';

// write code here

const employees = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  return [...list].sort((prev, next) => {
    const sortedA = prev.dataset.salary.slice(1).split(',').join('');
    const sortedB = next.dataset.salary.slice(1).split(',').join('');

    return +sortedB - +sortedA;
  });
}

const sortedEmployees = sortList(employees);

function getEfficiees(list) {
  listOfEmployees.append(...list);
}

getEfficiees(sortedEmployees);
