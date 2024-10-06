'use strict';

// write code here
const employeesList = [...document.querySelectorAll('li')];

getEmployees(employeesList);

function sortList(list) {
  const sortedList = [...list];

  sortedList.sort(
    (salary1, salary2) =>
      parseInt(salary1.dataset.salary.replace(/[$,]/g, '')) -
      parseInt(salary2.dataset.salary.replace(/[$,]/g, '')),
  );

  return sortedList;
}

function getEmployees(list) {
  const sortedList = sortList(list);
  const ul = document.querySelector('ul');

  sortedList.forEach((el) => ul.insertAdjacentElement('beforeend', el));

  return sortedList;
}
