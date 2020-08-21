'use strict';

const list = document.querySelectorAll('li');

function sortList() {
  const listNew = [...list].sort((x, y) =>
    +y.dataset.salary.slice(1).split(',').join('')
     - (+x.dataset.salary.slice(1).split(',').join('')));

  document.querySelector('ul').append(...listNew);
}

function getEmployees() {
  return [...rightList].map(elem => ({
    name: elem.innerText,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  }));
}

const rightList = sortList(list);

sortList(list);
getEmployees(rightList);
// write code here
