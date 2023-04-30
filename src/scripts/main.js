'use strict';

const liElements = [...document.querySelectorAll('li')];
const ulElement = document.querySelector('ul');

function convert(person) {
  return +person.dataset.salary.slice(1).replace(',', '');
}

function sortList(arr) {
  const sortedList = [...arr].sort((firstNum, secondNum) =>
    convert(secondNum) - convert(firstNum));

  ulElement.append(...sortedList);
}

function getEmployees([...people]) {
  return people.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

getEmployees(liElements);
sortList(liElements);
