'use strict';

const elements = document.querySelectorAll('li');
const personList = document.querySelector('ul');

function helper(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(list) {
  const people = [...list];

  people.sort((li1, li2) => helper(li2.dataset.salary)
    - helper(li1.dataset.salary));

  personList.append(...people);
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(elements);
getEmployees(elements);
