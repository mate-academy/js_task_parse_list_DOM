'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(listOfEmployees) {
  const sortedList = listOfEmployees.sort(
    (a, b) => correctFormat(b.dataset.salary) - correctFormat(a.dataset.salary),
  );

  sortedList.forEach((el) => list.append(el));
}

function correctFormat(salary) {
  return +salary.slice(1).replace(',', '');
}

function getEmployes(prop) {
  return prop.map((employee) => ({
    name: employee.innerText,
    age: employee.dataset.age,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
  }));
}

sortList(employees);
getEmployes(employees);
