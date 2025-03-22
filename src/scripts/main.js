'use strict';

const list = [...document.querySelectorAll('li')];

function convertToNumber(str) {
  return Number(str.split('$').join('').split(',').join(''));
}

function sortList(people) {
  return people.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );
}

function getEmployees(people) {
  for (const person of people) {
    document.querySelector('ul').appendChild(person);
  }

  return people.map((element) => ({
    name: element.innerHTML,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
}

getEmployees(sortList(list));
