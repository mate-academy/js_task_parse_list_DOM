'use strict';

const employeesList = [...document.querySelectorAll('li')];

const listOfPeople = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);

function sortList(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));
  listOfPeople.append(...list);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

function toNumber(string) {
  return Number(string.replace(/\D+/g, ''));
}
