'use strict';

const people = document.querySelector('ul');
const persons = [...people.querySelectorAll('li')];

function toNumber(salary) {
  return +salary.replace(/[^\d]/g, '');
}

function sortList(list) {
  list
    .sort((a, b) => toNumber(b.dataset.salary)
    - toNumber(a.dataset.salary));

  people.append(...list);
}

function getEmployees(list) {
  return [...list].map(person => {
    return {
      name: person.textContent.trim(),
      ...person.dataset,
    };
  });
}

sortList(persons);
getEmployees(persons);
