'use strict';

const wrapperOfPersons = document.querySelector('ul');
const persons = document.querySelectorAll('li');

function sortList(list, wrapper) {
  function toParse(str) {
    return str.replace(/[^0-9]/g, '');
  }

  const copyList = [...list].sort(
    (a, b) => toParse(b.dataset.salary) - toParse(a.dataset.salary)
  );

  wrapper.append(...copyList);
}

function getEmployees(list) {
  const listOfPersons = [];

  list.forEach(person => listOfPersons.push({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

  return listOfPersons;
}

sortList(persons, wrapperOfPersons);
getEmployees(persons);
