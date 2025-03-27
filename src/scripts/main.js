/* eslint-disable function-paren-newline */
'use strict';

const employees = [...document.querySelectorAll('li')];

const employeesObj = [];

function prepareNumber(param) {
  return param.replace('$', '').replace(',', '');
}

employees.forEach((e) =>
  employeesObj.push({
    name: e.textContent.trim(),
    position: e.dataset.position,
    salary: prepareNumber(e.dataset.salary),
    age: e.dataset.age,
  }),
);

function sortList(list) {
  list.sort((a, b) => b.salary - a.salary);

  for (let i = 0; i < list.length; i++) {
    employees[i].textContent = list[i].name;
  }
}

function getEmployees() {
  return employeesObj;
}

sortList(employeesObj);
getEmployees();
