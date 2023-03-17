'use strict';

const list = [...document.querySelectorAll('li')];
const ulElement = document.querySelector('ul');

function getSalary(person) {
  return Number(person.dataset.salary.slice(1).replace(',', ''));
}

function sortList(people) {
  const sorted = people.sort((prevPerson, currPerson) => (
    getSalary(currPerson) - getSalary(prevPerson)
  ));

  ulElement.append(...sorted);
}

function getEmployees(people) {
  return people.map((person) => {
    return {
      name: person.innerText,
      ...person.dataset,
    };
  });
}

sortList(list);
getEmployees(list);
