'use strict';

// write code here

const list = document.querySelector('ul');
const items = [...list.children];

function sortList(elements) {
  [...elements]
    .sort((a, b) => {
      const salaryA = formattedSalary(a.getAttribute('data-salary'));
      const salaryB = formattedSalary(b.getAttribute('data-salary'));

      return salaryB - salaryA;
    })
    .forEach((person) => {
      list.appendChild(person);
    });
}

function formattedSalary(salary) {
  return Number(salary.replace(/,/g, '.').replace(/[$]/g, ''));
}

function getEmployees(elements) {
  return elements.map((person) => ({
    name: person.textContent.trim(),
    position: person.getAttribute('data-position'),
    salary: `$` + formattedSalary(person.getAttribute('data-salary')).toFixed(3),
    age: Number(person.getAttribute('data-age')),
  }));
}

getEmployees(items);
sortList(items);
