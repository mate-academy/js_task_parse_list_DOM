'use strict';

const employeesList = [...document.getElementsByTagName('li')];

function sortList(list) {
  list.sort((a, b) => (+b.dataset.salary.slice(1).split(',').join(''))
  - (+a.dataset.salary.slice(1).split(',').join('')));
  list.map(li => li.parentElement.append(li));
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.outerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
