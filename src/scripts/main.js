'use strict';

// write code here
const ulElement = document.querySelector('ul');
const employeesArray = [...document.querySelectorAll('ul li')];

function getEmployees(list) {
  const employees = [];

  list.forEach((employee) => {
    employee.name = employee.innerText;
    employee.salary = employee.dataset.salary;
    employee.position = employee.dataset.position;
    employee.age = employee.dataset.age;

    employees.push({
      name: employee.name,
      salary: employee.salary,
      position: employee.position,
      age: employee.age,
    });
  });

  return employees;
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
  return +salary.slice(1).replace(/,/g, '');
}

getEmployees(employeesArray);

sortList(employeesArray);
