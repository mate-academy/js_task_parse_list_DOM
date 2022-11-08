'use strict';

function num(string) {
  return string.replace('$', '').replace(',', '');
}

function sortList(list) {
  return list.sort((a, b) => num(b.dataset.salary) - num(a.dataset.salary));
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

const listEmployees = Array.from(document.querySelectorAll('ul > li'));

sortList(listEmployees);
getEmployees(listEmployees);
