'use strict';

const list = document.querySelectorAll('li');

function toNumber(str) {
  return +str.dataset.salary.slice(1).replaceAll(',', '');
}

function sortList(someList) {
  const newList = [...someList].sort((person1, person2) =>
    toNumber(person2)
      - toNumber(person1));

  document.querySelector('ul').append(...newList);
}

function getEmployees(someList) {
  return [...someList].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(list);

getEmployees(list);
