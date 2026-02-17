'use strict';

// write code here

const employees = [...document.querySelectorAll('li')];

function textConverter(str) {
  return +str.replace(/[$,]/g, '');
}

function sortList(list) {
  list.sort(
    (a, b) => textConverter(b.dataset.salary) - textConverter(a.dataset.salary),
  );

  const ul = document.querySelector('ul');

  list.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
