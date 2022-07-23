'use strict';

const startList = document.querySelector('ul');

function format(element) {
  return +element.slice(1).split(',').join('');
}

function sortList(list) {
  const items = list.querySelectorAll('li');

  const arr = [...items].sort((person1, person2) => {
    return format(person2.dataset.salary) - format(person1.dataset.salary);
  });

  arr.forEach(person => list.append(person));
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return [...items].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(startList);
getEmployees(startList);
