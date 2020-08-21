/* eslint-disable no-shadow */
'use strict';

function getEmployees(list) {
  const people = [];

  for (let i = 0; i < list.length; i++) {
    const person = { ...list[i].dataset };

    person.name = list[i].innerText;

    person.salary = +person.salary
      .slice(1)
      .split(',')
      .join('');

    people.push(person);
  }

  return people;
}

function sortList(people) {
  people.sort((a, b) => a.salary - b.salary);
}

const currentList = document.querySelectorAll('li');
const people = getEmployees(currentList);

sortList(people);

// console.table(people);
