'use strict';

const employees = Array.from(document.querySelectorAll('li'));
const list = document.querySelector('ul');

function createPeopeList(people) {
  return people.map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

function filterPeopeList(people) {
  people.sort((a, b) =>
    Number(b.dataset.salary.replace(/[^0-9]/gi, ''))
    - Number(a.dataset.salary.replace(/[^0-9]/gi, ''))
  );
  list.append(...people);
}

createPeopeList(employees);
filterPeopeList(employees);
