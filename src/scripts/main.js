'use strict';

const list = document.querySelector('ul');
const listSalary = [...document.querySelectorAll('li')];

function getSalary(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(arr) {
  const sortedList = arr.sort((a, b) =>
    getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  list.append(...sortedList);
}

function getEmployees(arr) {
  return arr.map(item => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(listSalary);
getEmployees(listSalary);