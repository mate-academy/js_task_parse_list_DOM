'use strict';

const employeesList = document.querySelectorAll('li');
const employeesArray = [...employeesList];
const listUl = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const salaryA = a.dataset.salary.slice(1).split(',').join('.');
    const salaryB = b.dataset.salary.slice(1).split(',').join('.');

    return Number(salaryB - salaryA);
  });

  for (const item of list) {
    listUl.append(item);
  }
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employeesArray);
getEmployees(employeesArray);
