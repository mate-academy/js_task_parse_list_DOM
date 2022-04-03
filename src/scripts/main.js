'use strict';

const getAllEmployees = document.querySelectorAll('li');
const ulList = document.querySelector('ul');

function sortList(list) {
  const result = [...list].sort((a, b) => (
    +b.dataset.salary.slice(1).split(',').join('')
  - +a.dataset.salary.slice(1).split(',').join('')));

  ulList.append(...result);

  return result;
}

function getEmployees(list) {
  return sortList(list).map(i => ({
    name: i.textContent,
    ...i.dataset,
  }));
}

sortList(getAllEmployees);
getEmployees(getAllEmployees);
