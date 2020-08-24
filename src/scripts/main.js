'use strict';

const listOfPeople = [...document.querySelectorAll('li')];

const changedList = document.querySelector('ul');

function sortList(people) {
  people.sort(
    (first, next) =>
      +next.dataset.salary.replace(/[^0-9]/gi, '')
      - +first.dataset.salary.replace(/[^0-9]/gi, '')
  );

  changedList.append(...people);
}

function getEmployees(people) {
  return people.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(listOfPeople);
getEmployees(listOfPeople);
