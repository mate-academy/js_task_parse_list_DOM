'use strict';

const listPlace = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(item) {
  const salaryList = [...item].sort((a, b) =>
    +b.dataset.salary.slice(1).replace(',', '')
 - +a.dataset.salary.slice(1).split(',').join(''));

  listPlace.append(...salaryList);
}

function getEmployees(persons) {
  return [...persons].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
