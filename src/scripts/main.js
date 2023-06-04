'use strict';

const list = document.querySelectorAll('li');

function sortList(elements) {
  return [...elements].sort((a, b) => {
    return getEmployees(b) - getEmployees(a);
  });
}

function getEmployees(property) {
  return +property.dataset.salary.slice(1).split(',').join('');
}

const sortEmployees = sortList(list);

document.querySelector('ul').append(...sortEmployees);
