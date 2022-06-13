'use strict';

const initList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function toNumber(string) {
  let number = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ',' && string[i] !== '$') {
      number += string[i];
    }
  }

  return +number;
}

function sortList(list) {
  const sorted = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  initList.append(...sorted);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(employees);
getEmployees(employees);
