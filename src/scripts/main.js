'use strict';

// write code here

const peopleList = [...document.querySelectorAll('li')];

function toNumber(str) {
  return +str.replace(/[^\d]/g, '');
}

function sortList(list) {
  list.sort((a, b) => toNumber(b.dataset.salary)
  - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...list);
}

function getEmployee(list) {
  return [...list].map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

sortList(peopleList);
getEmployee(peopleList);
