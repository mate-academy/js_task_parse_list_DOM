'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  const people = [...ul.children];

  people.sort((person1, person2) => converter(person2.dataset.salary)
    - converter(person1.dataset.salary));

  people.forEach(person => ul.append(person));
}

function converter(item) {
  return +item.slice(1).split(',').join('');
}

function getEmployees(list) {
  let array = [];
  const people = [...ul.children];

  array = people.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: converter(person.dataset.salary),
    age: +person.dataset.age,
  }));

  return array;
}

sortList(ul);
getEmployees(ul);
