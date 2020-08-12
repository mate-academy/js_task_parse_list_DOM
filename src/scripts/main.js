'use strict';

let employees = document.querySelector('ul');

function sortList(employeesAll) {
  const employeess = [...employeesAll];

  employeess.sort((a, b) => {
    return (+b.dataset.salary.split(',').join('').split('$').join(''))
    - (+a.dataset.salary.split(',').join('').split('$').join(''));
  });

  employeess[0].parentElement.append(...employeess);
  employees = employeess;

  return employees;
}

sortList(employees.children);

function getEmployees(employees2) {
  const arrEmployees = [];

  employees2.forEach(employee => {
    const objEmployee = {};

    objEmployee.name = employee.innerText;
    objEmployee.position = employee.dataset.position;
    objEmployee.salary = employee.dataset.salary;
    objEmployee.age = employee.dataset.age;

    return arrEmployees.push(objEmployee);
  });

  return arrEmployees;
}

getEmployees(employees);
