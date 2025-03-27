'use strict';

const employeesList = document.querySelector('ul');
const employeesItems = document.querySelectorAll('li');

const sortedList = sortList(employeesItems);

getEmployees(employeesList, sortedList);

function sortList(listItems) {
  return [...listItems].sort((a, b) => {
    return getNumber(b.dataset.salary) - getNumber(a.dataset.salary);
  });
}

function getNumber(salary) {
  return parseInt(salary.slice(1).replace(/,/g, ''));
}

function getEmployees(list, listItems) {
  list.innerHTML = null;
  listItems.forEach((item) => list.append(item));
}
