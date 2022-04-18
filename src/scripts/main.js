'use strict';

const list = document.querySelector('ul');
const employeesList = [...list.children];

function salary(str) {
  return +str.split('').filter(char => '0123456789'.includes(char)).join('');
}

function sortList(str) {
  const sortedBySalary = str.sort((x, y) =>
    salary(x.dataset.salary) - salary(y.dataset.salary)
  );

  sortedBySalary.map(element => list.append(element));
}

function getEmployees(array) {
  return array.map(element => ({
    name: element.textContent,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
