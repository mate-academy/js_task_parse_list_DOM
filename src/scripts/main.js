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
    position: e.getAttribute('data-position'),
    salary: prepareNumber(e.getAttribute('data-salary')),
    age: e.getAttribute('data-age'),
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
