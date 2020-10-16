'use strict';

const people = document.querySelector('ul');

function salaryFormats(string) {
  return +string.replace(/[\s.,$]/g, '');
}

function sortList(list) {
  return [...list.children].sort((a, b) => (
    salaryFormats(a.dataset.salary) - salaryFormats(b.dataset.salary)
  ))
    .forEach(person => list.prepend(person));
};

function getEmployees(list) {
  return [...list.children].map(({ innerText, dataset }) =>
    ({
      name: innerText,
      position: dataset.position,
      salary: dataset.salary,
      age: dataset.age,
    }));
};

getEmployees(people);
sortList(people);
