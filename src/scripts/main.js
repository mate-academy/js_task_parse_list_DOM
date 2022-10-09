'use strict';

const employeeList = [...document.querySelectorAll('li')];
const mainList = document.querySelector('ul');

function salarySort(list) {
  list.sort((a, b) => (+b.dataset.salary.slice(1).split(',').join(''))
   - (+a.dataset.salary.slice(1).split(',').join('')));

  return list;
}

function sortList(list) {
  mainList.append(...salarySort(list));
}

function getEmployees(list) {
  const employees = [];
  const copyList = [...list];

  for (const item of copyList) {
    employees.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return employees;
}

sortList(employeeList);
getEmployees(employeeList);
