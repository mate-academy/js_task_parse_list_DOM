'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((empl1, empl2) =>
      toNumber(empl2.dataset.salary) - toNumber(empl1.dataset.salary)
    )
    .forEach(employee => list.append(employee));

  return list;
}

function toNumber(salary) {
  return +salary.replace(/[^0-9]/gi, '');
}

function getEmployees(arr) {
  return [...arr].map(employee => employee.innerText);
}

getEmployees(sortList(employees));
