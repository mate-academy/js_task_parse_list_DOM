'use strict';

const peopleList = [...document.querySelectorAll('li')];
const ulAppendSelector = document.querySelector('ul');

const sortList = (list) => {
  return list.sort((personA, personB) => {
    return +(personB.dataset.salary.slice(1).split(',').join(''))
    - +(personA.dataset.salary.slice(1).split(',').join(''));
  });
};

const getEmployees = (list) => {
  ulAppendSelector.append(...list);

  return list.map(person => ({
    name: person.innerText,
    salary: person.dataset.salary,
  }));
};

sortList(peopleList);
getEmployees(peopleList);
