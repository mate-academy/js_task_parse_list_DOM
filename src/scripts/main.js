'use strict';

const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

function sortList(people) {
  const array = [...people];

  const number = person => +person.dataset.salary.replace(/\W/g, '');

  array.sort((person1, person2) => number(person2) - number(person1));

  list.append(...array);
};

function getEmployees(people) {
  const array = [];

  people.forEach(person => {
    array.push({
      name: person.innerText,
      ...person.dataset,
    });
  });

  return array;
}

sortList(items);
getEmployees(items);
