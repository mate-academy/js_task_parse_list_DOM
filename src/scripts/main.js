'use strict';

const liElements = [...document.querySelectorAll('li')];

const employes = liElements.map((li) => ({
  name: li.innerText,
  position: li.getAttribute('data-position'),
  salary: convertsToNumber(li.getAttribute('data-salary')),
  age: li.getAttribute('data-age'),
}));

function convertsToNumber(value) {
  const number = parseFloat(value.slice(1));

  return number;
}

function sortList(people) {
  return people.sort((a, b) => b.salary - a.salary);
}

function getEmployees(people) {
  return people.map((person) => ({
    ...person,
    salary: '$' + person.salary.toFixed(2),
  }));
}

sortList(employes);
getEmployees(employes);
