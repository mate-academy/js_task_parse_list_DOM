'use strict';

const liList = document.querySelectorAll('li');
const ulList = document.querySelector('ul');

function sortList(list) {
  const sorted = [...list].sort((a, b) =>
    +(b.dataset.salary.split('$').join('').split(',').join(''))
    - +(a.dataset.salary.split('$').join('').split(',').join('')));

  ulList.append(...sorted);
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(liList);
getEmployees(liList);
