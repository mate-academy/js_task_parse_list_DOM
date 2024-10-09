'use strict';

const listItems = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function toNum(string) {
  const dolarString = string;
  const numberString = dolarString.replace('$', '').replace(',', '');

  return +numberString;
}

function sortBySalary(items, list) {
  items.sort((a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary));

  list.inerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortBySalary(listItems, employeesList);

getEmployees(listItems);
