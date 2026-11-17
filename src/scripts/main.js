'use strict';

const employeeList = document.querySelector('ul');

function getSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = [...list.children];

  listItems.sort((first, second) => {
    return getSalary(second.dataset.salary) - getSalary(first.dataset.salary);
  });

  listItems.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(employeeList);

getEmployees(employeeList);
