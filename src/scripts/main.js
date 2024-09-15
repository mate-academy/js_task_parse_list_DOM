'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];
const employeesCollection = document.querySelector('ul');

function toNumber(string) {
  return +string.replace(/[$ ,]/g, '');
}

function sortList(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employeesCollection.append(...list);
}

function getEmployees(list) {
  return list.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
