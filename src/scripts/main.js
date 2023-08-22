'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function toNumber(el) {
  return Number(el.dataset.salary.slice(1).split(',').join(''));
}

function sortList(list) {
  const sortedList = [...list].sort((a, b) => toNumber(b) - toNumber(a));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);