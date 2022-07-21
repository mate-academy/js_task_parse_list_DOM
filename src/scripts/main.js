'use strict';

const salaryList = document.querySelector('ul').children;

function sortList(list) {
  const salary = [...list]
    .sort((item1, item2) =>
      item2.dataset.salary
        .replace(/[^0-9]/g, '') - item1.dataset.salary
        .replace(/[^0-9]/g, ''));

  const employeesList = document.querySelector('ul');

  for (const item of salary) {
    employeesList.append(item);
  }
}

function getEmployees(list) {
  const employees = [];

  for (const item of list) {
    employees.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: +item.dataset.age,
    });
  }

  return employees;
}

sortList(salaryList);
getEmployees(salaryList);
