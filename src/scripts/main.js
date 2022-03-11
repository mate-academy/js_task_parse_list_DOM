'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];

const listUl = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (a, b) =>
      +b.dataset.salary.replace(/\D/g, '')
      - +a.dataset.salary.replace(/\D/g, '')
  );

  listUl.append(...list);
}

function getEmployees(list) {
  return list.map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
