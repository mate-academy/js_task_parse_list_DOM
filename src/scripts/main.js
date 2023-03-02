'use strict';

let list = document.querySelectorAll('li');

function toNumber(str) {
  return +str.dataset.salary.slice(1).split(',').join('');
}

function sortList(someList) {
  list = [...someList].sort((person1, person2) =>
    toNumber(person2)
      - toNumber(person1));

  document.querySelector('ul').append(...list);
}

function getEmployees(someList) {
  return [...someList].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(list);

getEmployees(list);
