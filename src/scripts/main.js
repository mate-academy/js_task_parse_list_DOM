'use strict';

const people = document.querySelectorAll('li');
const peopleList = document.querySelector('ul');

function lineToNumber(string) {
  return +string.replace(/\D/g, '');
}

function sortList(list) {
  return [...list].sort((a, b) => (
    lineToNumber(b.dataset.salary) - lineToNumber(a.dataset.salary)
  ));
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

getEmployees(people);
peopleList.append(...sortList(people));
