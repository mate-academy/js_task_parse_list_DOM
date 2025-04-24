'use strict';

// write code here
const list = Array.from(document.querySelectorAll('li'));

function getSalary(li) {
  return Number(li.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(items) {
  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });
}

const ul = document.querySelector('ul');

sortList(list);

list.forEach((li) => ul.appendChild(li));

function getEmployees(items) {
  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

getEmployees(list);
