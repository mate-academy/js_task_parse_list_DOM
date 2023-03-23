'use strict';

const employeesList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const toNumber = str => +(str.replace('$', '').replace(',', ''));

function sortList(list) {
  const sorted = list
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  ul.append(...sorted);
}

function getEmployees(list) {
  return list.map(li => ({
    name: li.innerText,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
