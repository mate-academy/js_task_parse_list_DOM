'use strict';

const listing = document.querySelectorAll('li');
const ull = document.querySelector('ul');

function toNumber(salary) {
  return Number(salary.split('$').join('').split(',').join(''));
}

function sortList(list) {
  const people = [...list];

  people.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  for (const person of people) {
    ull.append(person);
  }
}

function getEmployees(list) {
  for (const element of list) {
    const elementObj = element.dataset;

    return elementObj;
  }
}

getEmployees(listing);
sortList(listing);
