'use strict';

const ul = document.querySelector('ul');
const list = document.querySelectorAll('li');

const people = Array.from([...list]).map(person => {
  return {
    name: person.textContent.split('\n').join('').trim(),
    salary: Number(person.dataset.salary.slice(1).split(',').join('')),
  };
}).sort((a, b) => b.salary - a.salary);

ul.innerHTML = '';

const names = people.map(person => person.name);

names.forEach(item => {
  ul.innerHTML += `<li>
    ${item}
  </li>`;
});
