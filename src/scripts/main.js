'use strict';

const list = document.querySelectorAll('li');
const peopleList = document.querySelector('ul');

function toNumber(salary) {
  return Number(salary.split('$').join('').split(',').join(''));
}

function sortList(listing) {
  const people = [...listing];

  people.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  for (const person of people) {
    peopleList.append(person);
  }
}

function getEmployees(people) {
  const arrOfObjects = [];

  for (const element of people) {
    const elementObj = element.dataset;

    arrOfObjects.push(elementObj);
  }

  return arrOfObjects;
}

getEmployees(list);
sortList(list);
