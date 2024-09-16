'use strict';

const list = document.querySelector('ul');

const persons = [...list.children];

function converter(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(people, convert) {
  const res = people.sort((firstEmployer, secondEmployer) => {
    return convert(secondEmployer.dataset.salary)
    - convert(firstEmployer.dataset.salary);
  });

  list.append(...res);
}

function getEmployees(people) {
  return people.map(person => ({
    name: person.innerText,
    position: person.dataset.name,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

getEmployees(persons);
sortList(persons, converter);
