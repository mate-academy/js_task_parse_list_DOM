'use strict';

const parentList = document.querySelector('ul');
const people = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((personOne, personTwo) => (
    +(personTwo.dataset.salary.slice(1).replace(',', ''))
    - +(personOne.dataset.salary.slice(1).replace(',', ''))
  ));

  parentList.append(...list);
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    const person = {};

    person.name = list[i].innerText;
    person.position = list[i].dataset.position;
    person.salary = list[i].dataset.salary;
    person.age = list[i].dataset.age;

    employees.push(person);
  }

  return employees;
}

sortList(people);
getEmployees(people);
