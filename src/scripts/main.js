'use strict';

const list = document.querySelector('ul');
const listOfPeople = [...list.children];

const sortBySalary = () => listOfPeople
  .sort((a, b) =>
    (+b.dataset.salary.replace('$', '').split(',').join(''))
      - (+a.dataset.salary.replace('$', '').split(',').join('')))
  .forEach(person => list.append(person));

const getListOfEmployees = () =>
  listOfPeople.map(person =>
    Object.assign({ name: person.innerText }, person.dataset));

sortBySalary();
getListOfEmployees();
