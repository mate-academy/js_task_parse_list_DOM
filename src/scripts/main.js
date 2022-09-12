'use strict';

const startList = document.querySelector('ul');
const listElements = [...document.querySelectorAll('li')];
const convertToNumber = salary => +salary.slice(1).split(',').join('');

function sortList(list) {
  const sortElem = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  startList.append(...sortElem);
};

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(listElements);
getEmployees(listElements);
