'use strict';

const ul = document.querySelector('ul');

const list = [...document.querySelectorAll('li')];

function sortList(arr) {
  const formated = (str) => +str.slice(1).split(',').join('');
  const sorted = arr.sort((a, b) =>
    formated(b.dataset.salary) - formated(a.dataset.salary));

  ul.append(...sorted);
}

function createObject(arr) {
  const listOfEmployees = arr.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  })
  );

  return listOfEmployees;
}

sortList(list);
createObject(list);
