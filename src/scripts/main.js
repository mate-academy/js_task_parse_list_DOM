'use strict';

const parsed = document.querySelector('ul');

function sortList(list) {
  const people = [...list.children]
    .sort((a, b) => (
      +(b.dataset.salary).slice(1)
        .replace(/,/g, '') - +(a.dataset.salary).slice(1).replace(/,/g, ''))
    );

  parsed.append(...people);

  return people;
}
sortList(parsed);

function getEmployees(list) {
  const people = [...list.children].map(person => {
    return ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  });

  return people;
}
getEmployees(parsed);
