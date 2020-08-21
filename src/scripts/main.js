'use strict';

const people = document.querySelector('ul');

function sortList(peoples) {
  [...peoples.children]
    .sort((person1, person2) => {
      const people1 = person1.dataset.salary.replace(/\W/gi, '');
      const people2 = person2.dataset.salary.replace(/\W/gi, '');

      return people2 - people1;
    })
    .forEach(person => peoples.append(person));
}

function getEmployees(peoples) {
  return [...peoples.children].map(person => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(people);
getEmployees(people);
