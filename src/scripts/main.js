'use strict';

const peopleList = [...document.querySelectorAll('li')];
const ulAppendSelector = document.querySelector('ul');

const sortList = (list) => {
  const sorted = list.sort((personA, personB) => {
    return +(personB.dataset.salary.slice(1).split(',').join(''))
    - +(personA.dataset.salary.slice(1).split(',').join(''));
  });

  ulAppendSelector.append(...sorted);
};

const getEmployees = (list) => {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(peopleList);
getEmployees(peopleList);
