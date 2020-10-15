'use strict';

const listOfEmployees = document.querySelector('ul');
const listOfPeople = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) =>
    +(b.dataset.salary.replace(/[\s.,$]/g, ''))
    - +(a.dataset.salary.replace(/[\s.,$]/g, ''))
  );

  listOfEmployees.append(...list);
}

function getSortedList(list) {
  const sortedPeople = [];

  for (const person of list) {
    const personInfo = {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    sortedPeople.push(personInfo);
  }

  return sortedPeople;
}

sortList(listOfPeople);
getSortedList(listOfPeople);
