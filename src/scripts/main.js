'use strict';

// write code here
const ulElement = document.querySelector('ul');
const employeesArray = [...document.querySelectorAll('ul li')];

function getEmployees(list) {
  list.forEach((employee, index) => {
    employee.name = employee.innerText;
    employee.salary = employee.dataset.salary;
    employee.position = employee.dataset.position;
    employee.age = employee.dataset.age;
  });

  return list;
}

function sortList(list) {
  list.map((employee) => {
    employee.salary = convertSalary(employee.salary);
  });

  list.sort((a, b) => b.salary - a.salary);

  list.forEach((employee) => {
    ulElement.appendChild(employee);
  });
}

function convertSalary(salary) {
  return +salary.slice(1).replace(/,/g, '.');
}

const employees = getEmployees(employeesArray);

sortList(employees);
