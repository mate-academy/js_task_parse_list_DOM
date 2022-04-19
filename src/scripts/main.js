'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list.children]
    .sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...sortedList);
}

function getSalary(item) {
  return +item.dataset.salary.replace('$', '').replaceAll(',', '');
}

function getEmployees(list) {
  return [...list.children].map(({ innerText, dataset }) => ({
    name: innerText,
    ...dataset,
  }));
}

sortList(employeeList);
getEmployees(employeeList);
