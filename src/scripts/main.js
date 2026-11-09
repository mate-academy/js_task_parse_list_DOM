'use strict';

// write code here

const list = document.querySelector('ul');

function sortList(employeesList) {
  const array = Array.from(employeesList.querySelectorAll('li'));

  array.sort(function (a, b) {
    return Number(b.dataset.salary) - Number(a.dataset.salary);
  });

  list.append(...array);
}

function getEmployees(employeesList) {
  const li = employeesList.querySelectorAll('li');
  const employees = [];

  for (const l of li) {
    const employee = {
      name: l.dataset.name,
      position: l.dataset.position,
      salary: Number(l.dataset.salary),
      age: Number(l.dataset.age),
    };

    employees.push(employee);
  }

  return employees;
}

sortList(list);
getEmployees(list);
