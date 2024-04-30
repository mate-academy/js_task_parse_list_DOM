'use strict';

const data = document.querySelectorAll('ul');
const employees = [...document.querySelectorAll('li')];

function convertSalary(salary) {
  const salaryString = salary.dataset.salary;

  return +salaryString.replace('$', '').replace(',', '');
}

function sortList(list) {
  list
    .sort((a, b) => convertSalary(b) - convertSalary(a))
    .forEach((employee) => {
      data.forEach((ul) => {
        ul.append(employee);
      });
    });
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
