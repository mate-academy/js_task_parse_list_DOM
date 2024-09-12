'use strict';

const listOfEmployees = document.body.children[1];

function salaryToNumber(salary) {
  const result = salary.slice(1).split(',').join('');

  return +result;
}

function getEmployees(list) {
  const employees = [];

  for (const employee of list.children) {
    const employeeObject = {};

    employeeObject.item = employee;
    employeeObject.salary = salaryToNumber(employee.dataset.salary);

    employees.push(employeeObject);
  }

  return employees;
}

function sortList(toSort) {
  toSort.sort((a, b) => b.salary - a.salary);

  for (let i = 0; i < listOfEmployees.children.length; i++) {
    listOfEmployees.append(toSort[i].item);
  }
}

sortList(getEmployees(listOfEmployees));
