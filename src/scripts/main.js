'use strict';

function getNumber(str) {
  return +str.split('').filter(num => !isNaN(num)).join('');
}

function sortList(list) {
  return list.sort((a, b) => (
    getNumber(b.dataset.salary) - getNumber(a.dataset.salary)));
}

function getEmployees(list) {
  const employeesInfo = [];

  list.forEach(item => (
    employeesInfo.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    })
  ));

  return employeesInfo;
}

const employees = [ ...document.querySelectorAll('li') ];

sortList(employees);
getEmployees(employees);

employees.forEach(employee => {
  document.querySelector('ul').append(employee);
});
