'use strict';

// write code here
const people = [...document.querySelectorAll('[data-salary]')];
const emp = [];
const list = document.querySelector('ul');

people.forEach((person) => {
  emp.push({
    name: person.dataset.name,
    salary: Number(person.dataset.salary.replace('$', '').replace(/,/g, '')),
  });
});

people.sort((a, b) => {
  return (
    Number(b.dataset.salary.replace('$', '').replace(/,/g, '')) -
    Number(a.dataset.salary.replace('$', '').replace(/,/g, ''))
  );
});

people.forEach((person) => {
  list.append(person);
});
