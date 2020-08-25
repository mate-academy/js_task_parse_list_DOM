'use strict';

const persons = document.querySelector('ul');

function sortList(list) {
  return [...list.children].sort((a, b) =>
    (+a.dataset.salary.replace(/[\s.,$]/g, ''))
    - (+b.dataset.salary.replace(/[\s.,$]/g, '')))
    .forEach(person => list.prepend(person));
};

function getEmployees(list) {
  return [...list.children].map(person =>
    ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }));
};

getEmployees(persons);
sortList(persons);
