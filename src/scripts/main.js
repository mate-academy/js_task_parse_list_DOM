'use strict';

const ul = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortBySalary(list) {
  const sorted = list.sort((a, b) => b.dataset.salary
    .replace(/[$,]/g, '') - a.dataset.salary.replace(/[$,]/g, ''));

  ul.append(...sorted);
}

function getEmployees(list) {
  const employeesList = list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employeesList;
};

sortBySalary(employees);
getEmployees(employees);
