'use strict';

const ul = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const sorted = list.sort(
    (a, b) => toInt(b.dataset.salary) - toInt(a.dataset.salary),
  );

  ul.append(...sorted);

  function toInt(str) {
    return parseInt(str.replace(/[$,]/g, ''));
  }
}

function getEmployees(list) {
  const employeesList = list.map((value) => ({
    name: value.innerText,
    position: value.dataset.position,
    salary: value.dataset.salary,
    age: value.dataset.age,
  }));

  return employeesList;
}

sortList(employees);
getEmployees(employees);
