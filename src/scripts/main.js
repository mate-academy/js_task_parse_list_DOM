'use strict';

// write code here
const listUl = document.getElementsByTagName('ul')[0];

function convertToNumber(num) {
  const numFirst = num.slice(1);

  return numFirst.split(',').reduce((prev, curr) => prev + curr, '');
}

function sortList(list) {
  listUl.innerHTML = '';

  const sorted = list.sort(
    (a, b) => convertToNumber(a.salary) - convertToNumber(b.salary),
  );

  for (let i = 0; i < sorted.length; i++) {
    const liItem = document.createElement('li');

    liItem.innerHTML = sorted[i].name.trim();
    liItem.setAttribute('data-position', sorted[i].position);
    liItem.setAttribute('data-salary', sorted[i].salary);
    liItem.setAttribute('data-age', sorted[i].age);

    listUl.prepend(liItem);
  }
}

function getEmployees(list) {
  const people = [];

  for (let i = 0; i < list.length; i++) {
    const person = {
      position: list[i].getAttribute('data-position'),
      name: list[i].innerHTML,
      salary: list[i].getAttribute('data-salary'),
      age: list[i].getAttribute('data-age'),
    };

    people.push(person);
  }

  return people;
}

const liItems = document.getElementsByTagName('li');

sortList(getEmployees(liItems));
