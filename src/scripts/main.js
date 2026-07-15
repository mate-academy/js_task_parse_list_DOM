'use strict';

const people = [...document.querySelectorAll('li')];

const getSalary = (el) => Number(el.dataset.salary.replace(/[$,]/g, ''));

function sortList(items) {
  items.sort((a, b) => getSalary(b) - getSalary(a));

  const ul = items[0].parentElement;

  ul.replaceChildren(...items);
}

function getEmployees(items) {
  return items.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(people);

getEmployees(people);
