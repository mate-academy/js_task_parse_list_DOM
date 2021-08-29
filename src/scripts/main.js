'use strict';

// write code here
const newList = document.querySelector('ul');

function sortList(list) {
  return [...list.children]
    .sort((a, b) => (
      newSalary(b.dataset.salary) - newSalary(a.dataset.salary)
    ));
}

function newSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

const newSort = sortList(newList);

newSort.forEach(employee => (
  newList.append(employee)
));

function getEmployees(list) {
  return [...list.children]
    .map(employee => ({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
}

getEmployees(newList);
