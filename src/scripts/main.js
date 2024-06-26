'use strict';

let employeesItems = [...document.querySelectorAll('li')];

function parseStr(str) {
  return parseFloat(str.substr(1).split(',').join(''));
}

function sortList(list) {
  const employeesSorted = list.sort((emp1, emp2) => {
    return parseStr(emp1.dataset.salary) > parseStr(emp2.dataset.salary)
      ? -1
      : 1;
  });

  employeesItems = employeesSorted;

  return employeesItems;
}

function getEmployees() {
  const list = document.querySelector('ul');

  list.innerHTML = '';

  employeesItems.forEach((item) => list.appendChild(item));

  const employees = employeesItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseStr(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };
  });

  return employees;
}

sortList(employeesItems);
getEmployees();
