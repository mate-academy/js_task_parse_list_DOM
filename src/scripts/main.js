'use strict';

let employees = document.querySelectorAll('li');

function sortList(employeesAll) {
  const employeess = [...employeesAll];

  employeess.sort((a, b) => {
    return (+b.dataset.salary.split(',').join('').split('$').join(''))
    - (+a.dataset.salary.split(',').join('').split('$').join(''));
  });

  const ulList = document.querySelector('ul');

  ulList.append(...employeess);

  employees = employeess;

  return employees;
}

sortList(employees);

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
