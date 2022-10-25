'use strict';

// write code here
const list = document.querySelector('ul');
const preparedPerson = (person) => (
  Number(person.salary.slice(1).split(',').join(''))
);
const people = [...document.querySelectorAll('[data-position]')]
  .map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }))
  .sort((personA, personB) => {
    return preparedPerson(personB) - preparedPerson(personA);
  });

list.innerHTML = people
  .map(person => (`
    <li>
        ${person.name}
    </li>
  `))
  .join('');
