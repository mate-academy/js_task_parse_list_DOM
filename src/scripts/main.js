'use strict';

const peopleList = document.querySelector('ul');
const peopleItems = [...document.querySelectorAll('li')];

const convertSalary = person => (
  +(person.dataset.salary.slice(1).split(',').join(''))
);

const sortList = list => {
  list.sort((a, b) => convertSalary(b) - convertSalary(a));

  return peopleList.append(...peopleItems);
};

const getEmployees = list => list.map(
  person => ({
    name: person.innerText,
    ...person.dataset,
  }));

sortList(peopleItems);
getEmployees(peopleItems);
