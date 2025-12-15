'use strict';

// write code here
const ulElement = document.querySelector('ul');
const employeesArray = [...document.querySelectorAll('ul li')];

function sortList(list) {
  list.map((employee) => {
    employee.dataset.salary = employee.dataset.salary
      .slice(1)
      .replace(/,/g, '.');
  });

  return list.sort((a, b) => b.dataset.salary - a.dataset.salary);
}

function getEmployees(list) {
  list.forEach((employee) => {
    ulElement.appendChild(employee);
  });

  return list;
}

sortList(employeesArray);
getEmployees(employeesArray);
