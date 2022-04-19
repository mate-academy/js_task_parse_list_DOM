'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const convertToNumber = elem => {
    return +elem.dataset.salary.slice(1).split(',').join('');
  };

  list.sort((value1, value2) =>
    convertToNumber(value2) - convertToNumber(value1));

  listOfEmployees.append(...list);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
