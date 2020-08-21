/* eslint-disable no-shadow */
'use strict';

function getEmployees(list) {
  const people = [];

  for (let i = 0; i < list.length; i++) {
    const person = { ...list[i].dataset };

    person.name = list[i].innerText;

    person.numberSalary = +person.salary
      .slice(1)
      .split(',')
      .join('');

    people.push(person);
  }

  return people;
}

function sortList(people) {
  people.sort((a, b) => b.numberSalary - a.numberSalary);
}

function pasteNewList(people, list) {
  let newHTML = '';

  for (const person of people) {
    newHTML += `
    <li
    data-position="${person.position}"
    data-salary="${person.salary}"
    data-age="${person.age}"
  >
    ${person.name}
  </li>
    `;
  }

  document.querySelector('ul').innerHTML = newHTML;
}

const currentList = document.querySelectorAll('li');
const people = getEmployees(currentList);

sortList(people);

pasteNewList(people, currentList);
