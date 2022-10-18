'use strict';

const items = document.querySelectorAll('li');
const arr = [...items];

function sortList(list) {
  list.sort((a, b) => {
    a.dataset.salary = +a.dataset.salary.split('').filter(
      el => el !== '$' && el !== ',').join('');

    b.dataset.salary = +b.dataset.salary.split('').filter(
      el => el !== '$' && el !== ',').join('');

    return b.dataset.salary - a.dataset.salary;
  });

  items[0].replaceWith(...arr);
}

function getEmployees(list) {
  const employeeList = document.querySelector('ul');

  employeeList.append(...arr);

  return employeeList;
}

sortList(arr);
getEmployees(arr);
