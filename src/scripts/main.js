'use strict';

const employees = document.querySelector('ul');

sortList(employees);

getEmployees(employees);

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

  itemsArray.forEach((item) => list.appendChild(item));
}

function getSalary(item) {
  return Number(item.dataset.salary.slice(1).replace(',', ''));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.innerHtml,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}
