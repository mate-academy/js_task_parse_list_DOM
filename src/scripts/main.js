'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

const convertToNumber = (salary) => (
  Number(salary.slice(1).split(',').join('')));

function sortList(array) {
  const sortedList = array.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  list.append(...sortedList);
}

function getEmployees(array) {
  return array.map((person) => ({
    name: person.textContent,
    ...person.dataset,
  }));
}

getEmployees(listItems);
sortList(listItems);
