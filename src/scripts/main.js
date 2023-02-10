'use strict';

const listOfEmployees = document.querySelector('ul');
let items = document.querySelectorAll('li');

function sortList(list) {
  listOfEmployees.innerHTML = '';

  const sortedList = [...list].sort((a, b) => {
    const salaryA = Number(a.dataset.salary.slice(1).split(',').join(''));
    const salaryB = Number(b.dataset.salary.slice(1).split(',').join(''));

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => listOfEmployees.append(item));
  items = document.querySelectorAll('li');
}

function getEmployees(list) {
  const sortedArray = [...list];

  return sortedArray;
}

sortList(items);
getEmployees(items);
