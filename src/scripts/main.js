'use strict';

const wraper = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList([...roster]) {
  roster.sort((a, b) => convertation(b) - convertation(a));

  function convertation(el) {
    return +el.dataset.salary.slice(1).split(',').join('');
  }

  roster.map(el => wraper.append(el));
}

function getEmployees([...roster]) {
  const arrOfEmployees = [];

  roster.forEach(persone => arrOfEmployees.push({
    name: persone.innerText,
    position: persone.dataset.position,
    salary: persone.dataset.salary,
    age: persone.dataset.age,
  }));

  return arrOfEmployees;
}

sortList(list);
getEmployees(list);
