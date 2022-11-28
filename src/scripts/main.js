'use strict';

const listOfEmployees = document.querySelectorAll('li');
const employee = document.querySelector('ul');

function toNum(el) {
  return +el.dataset.salary.slice(1).split(',').join('');
}

function sortList(list) {
  return [...list].sort((a, b) => toNum(b) - toNum(a))
    .forEach(el => employee.append(el));
}

function getEmployees(list) {
  return [...list].map(emp => {
    return {
      name: emp.innerText,
      position: emp.dataset.position,
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    };
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
