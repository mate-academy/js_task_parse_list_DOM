'use strict';

const employeesList = [...document.querySelectorAll('li')];

const listOfPeople = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);

function sortList(list) {
  // eslint-disable-next-line max-len
  list.sort((a, b) => convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));
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

function convertToNumber(string) {
  return Number(string.replace(/\D+/g, ''));
}
