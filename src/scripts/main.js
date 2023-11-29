'use strict';

const list = document.querySelectorAll('li');
// console.log(list);

function getEmployees(data) {
  const employeeList = [];

  [...data].map(item => employeeList.push(Object.assign({
    'name': item.innerText,
    'position': item.dataset.position,
    'salary': +item.dataset.salary.replace('$', '').replace(',', ''),
    'age': item.dataset.age,
  })));

  return employeeList;
}

function sortEmployees(data) {
  const employeeList = [];

  [...data].map(item => employeeList.push(Object.assign({
    'name': item.innerText,
    'salary': +item.dataset.salary.replace('$', '').replace(',', ''),
  })))
    .sort((x, y) => x.salary - y.salary);

  const sortedList = employeeList.sort((a, b) => b.salary - a.salary);

  return sortedList;
}

getEmployees(list);
sortEmployees(list);
