'use strict';

// write code here
const listData = document.querySelectorAll('li');

function sortList(list) {
  const rootElement = document.querySelector('ul');
  const sortedList = [...list].sort((a, b) => (
    +(b.dataset.salary.slice(1).split(',').join(''))
    - +(a.dataset.salary.slice(1).split(',').join(''))
  ));

  for (const el of sortedList) {
    rootElement.append(el);
  }
}

function getEmployees(list) {
  const result = [...list].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

  return result;
}

sortList(listData);
getEmployees(listData);
