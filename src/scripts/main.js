'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');
const arrayOfEmployees = [...employees];

function getSalary(salary) {
  return Number(salary.slice(1).replace(/,/g, ''));
}

function sortList() {
  return arrayOfEmployees
    .sort((a, b) => getSalary(b.dataset.salary) - getSalary(a.dataset.salary))
    .forEach((item) => list.appendChild(item));
}

const getEmployees = () => {
  return arrayOfEmployees.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList();
getEmployees();
