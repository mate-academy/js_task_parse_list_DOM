'use strict';

function sortList(list) {
  list.sort((firstEmployee, secondEmployee) => {
    const firstSalary = convertSalary(firstEmployee.dataset.salary);
    const secondSalary = convertSalary(secondEmployee.dataset.salary);

    return secondSalary - firstSalary;
  });
}

function convertSalary(salary) {
  return +salary.replace(/[$,]/g, '');
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

const employees = [...document.querySelectorAll('li')];

sortList(employees);

const employeesList = getEmployees(employees);

const ul = document.querySelector('ul');

ul.append(...employees);
