'use strict';

function strToNum(str) {
  return Number(str.replace(/[$,]/g, ''));
}

function sortList(arr) {
  return [...arr].sort(
    (a, b) => strToNum(b.dataset.salary) - strToNum(a.dataset.salary),
  );
}

function getEmployees(arr) {
  return arr.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: strToNum(item.dataset.salary),
    age: +item.dataset.age,
  }));
}

const list = document.querySelector('ul');
const employees = Array.from(list.querySelectorAll('li'));
const sortedEmployees = sortList(employees);

sortedEmployees.forEach((item) => list.appendChild(item));

getEmployees(employees);
