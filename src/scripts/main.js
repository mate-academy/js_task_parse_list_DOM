'use strict';

const list = Array.from(document.querySelectorAll('li'));
const ul = document.querySelector('ul');

function getEmployees(listOfPeople) {
  const people = listOfPeople.map((person) => ({
    name: person.innerHTML.trim(),
    age: person.dataset.age,
    salary: person.dataset.salary,
    position: person.dataset.position,
  }));

  return people;
}

function sortList(listOfLi, listOfPeople) {
  const newList = [...listOfPeople].sort((item1, item2) => {
    return makeNumber(item2.dataset.salary) - makeNumber(item1.dataset.salary);
  });

  listOfLi.innerHTML = '';

  for (const item of newList) {
    listOfLi.appendChild(item);
  }
}

sortList(ul, list);
getEmployees(list);

function makeNumber(person) {
  return +person.replace(/[$,]/g, '');
}
