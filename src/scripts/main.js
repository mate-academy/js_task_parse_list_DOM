'use strict';

// write code here
const listOfEmployees = [...document.querySelectorAll('li')];

const listToChange = document.querySelector('ul');

function sortList(employees) {
  employees.sort(
    (prev, next) => (+next.dataset.salary.replace('$', '').replace(',', ''))
      - (+prev.dataset.salary.replace('$', '').replace(',', ''))
  );
  listToChange.append(...employees);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
