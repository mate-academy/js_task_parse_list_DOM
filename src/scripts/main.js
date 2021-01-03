'use strict';

const listUl = document.querySelector('ul');
const listCollection = document.querySelectorAll('li');

function sortList(list) {
  const listNew = [...list].sort((a, b) =>
    b.dataset.salary.split(',').join('').slice(1)
    - a.dataset.salary.split(',').join('').slice(1));

  listUl.append(...listNew);
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    employees[i] = {};
    employees[i].name = list[i].innerText;
    employees[i].position = list[i].dataset.position;
    employees[i].salary = list[i].dataset.salary;
    employees[i].age = list[i].dataset.age;
  }

  return employees;
}

sortList(listCollection);
getEmployees(listCollection);
