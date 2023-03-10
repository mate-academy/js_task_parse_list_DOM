'use strict';

const employeesElements = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

const convertSalary = (salary) => {
  return +salary.slice(1).split(',').join('');
};

function sortList(list) {
  return list.sort((a, b) => convertSalary(b.dataset.salary)
  - convertSalary(a.dataset.salary));
}

function getEmployees(list) {
  return list.map(elem => ({
    fullname: elem.innerText,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: +elem.dataset.age,
  }));
};

employeesList.append(...sortList(employeesElements));
getEmployees(employeesElements);
