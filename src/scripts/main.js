'use strict';

const people = document.querySelector('ul');
const peopleList = [...document.querySelectorAll('li')];

function toNumber(string) {
  return +string.slice(1).replace(',', '');
};

function sortlist(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  people.append(...list);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortlist(peopleList);
getEmployees(peopleList);
