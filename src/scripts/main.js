'use strict';

// write code here
const employeesList = document.querySelector('ul');
const employeesListItems = employeesList.children;

function sortList(list) {
  const sortedArr = [...list].sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  employeesList.innerHTML = '';

  sortedArr.forEach((item, ind, arr) => {
    employeesList.append(item);
  });
}

function salaryToNumber(str) {
  return +str.slice(1).split(',').join('');
}

sortList(employeesListItems);

function getEmployees(list) {
  const result = [];

  [...list].forEach((item, ind, arr) => {
    const employeOgj = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(employeOgj);
  });

  return result;
}

getEmployees(employeesListItems);
