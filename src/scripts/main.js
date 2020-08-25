'use strict';

// write code here
const employee = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(people) {
  people.sort((a, b) =>
    Number(b.dataset.salary.replace(/[^0-9]/g, ''))
    - Number(a.dataset.salary.replace(/[^0-9]/g, ''))
  );

  list.append(...people);
}

function getEmployees(people) {
  return people.map(person => ({
    name: person.textContent,
    ...person.dataset,
  }));
}

getEmployees(employee);
sortList(employee);
