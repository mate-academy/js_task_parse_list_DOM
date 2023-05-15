'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...listOfEmployees.children];

function getEmployeeSalary(employee) {
  return Number(employee.dataset.salary
    .slice(1)
    .replace(/,/gi, ''));
};

function sortList(list) {
  const sortedList = list
    .sort((a, b) => getEmployeeSalary(b) - getEmployeeSalary(a));

  listOfEmployees.append(...sortedList);
};

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList(employees);
getEmployees(employees);
