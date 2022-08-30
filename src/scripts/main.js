'use strict';

const listOfEmployees = document.querySelectorAll('[data-position]');

const formatSallary = (str) => {
  return +str.replace(/[^\d;]/g, '');
};

function sortList(...list) {
  const arr = list[0];

  return [...arr]
    .sort((a, b) => formatSallary(a
      .dataset.salary) - formatSallary(b
      .dataset.salary));
}

const sort = sortList(listOfEmployees);

const ul = document.querySelector('ul');

function getEmployees(sortedList) {
  sortedList.forEach(i => ul.prepend(i));
}

getEmployees(sort);
