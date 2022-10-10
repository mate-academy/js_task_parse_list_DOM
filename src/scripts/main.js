'use strict';

// write code here
const list = document.querySelector('ul');
const people = [...document.querySelectorAll('[data-position]')]
  .map(person => (
    {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }
  ))
  .sort((personA, personB) => (
    Number(personB.salary.slice(1).split(',').join(''))
    - Number(personA.salary.slice(1).split(',').join(''))
  ));

list.innerHTML = people
  .map(person => (`
    <li>
        ${person.name}
    </li>
  `))
  .join('');
