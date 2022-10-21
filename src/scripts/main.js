'use strict';

const employeesList = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => {
    a.dataset.salary = +a.dataset.salary.split('').filter(
      el => el !== '$' && el !== ',').join('');

    b.dataset.salary = +b.dataset.salary.split('').filter(
      el => el !== '$' && el !== ',').join('');

    return b.dataset.salary - a.dataset.salary;
  });
}

function getEmployees(list) {
  const employeesContainer = document.querySelector('ul');

  employeesContainer.append(...employeesList);

  return employeesContainer;
}

sortList(employeesList);
getEmployees(employeesList);
