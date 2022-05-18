'use strict';

// write code here
const collection = document.querySelector('ul');
const people = [...collection.children];

// console.log(collection);

function sortList(list) {
  const peopleMoney = salary =>
    salary.dataset.salary.split('$').join('').split(',').join('');

  list.sort((a, b) => {
    return peopleMoney(b) - peopleMoney(a);
  });

  collection.append(...list);
}

function getEmployees(list) {
  const array = list.map(result => ({
    'name': result.outerText,
    'position': result.dataset.position,
    'salary': result.dataset.salary,
    'age': result.dataset.age,
  }));

  return array;
}

sortList(people);
getEmployees(people);
