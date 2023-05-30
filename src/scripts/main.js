'use strict';

const employersList = [...document.querySelectorAll('li')];
const newList = document.querySelector('ul');

function toNumber(el) {
  return Number(el.dataset.salary.slice(1).replace(',', ''));
}

function sortList(list) {
  const sortedList = [...list].sort((a, b) => toNumber(b) - toNumber(a));

  newList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employersList);
getEmployees(employersList);
