'use strict';

// write code here
const employees = document.querySelector('ul');
const arrayOfEmployees = Array.from(employees.children);

function sortList(arr) {
  const sorrtedList = arrayOfEmployees.sort((a, b) =>
    convertNumber(b.dataset.salary) - convertNumber(a.dataset.salary));

  for (const elem of sorrtedList) {
    employees.append(elem);
  }
}

function getEmployees(list) {
  return list.map(item => ({
    name: item,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

function convertNumber(str) {
  return Number(str.replace(/[$,]/g, ''));
}

sortList(arrayOfEmployees);
getEmployees(arrayOfEmployees);
