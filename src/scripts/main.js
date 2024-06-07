'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  if (!list || !list.children) {
    return;
  }

  const listItems = [...list.children];

  listItems.sort(
    (a, b) => parseNumber(b.dataset.salary) - parseNumber(a.dataset.salary),
  );

  listOfEmployees.innerHTML = '';

  listOfEmployees.append(...listItems);
}

function getEmployees(list) {
  if (!list || !list.children) {
    return [];
  }

  return [...list.children].map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

function parseNumber(str) {
  const strNumbers = str.replace(/,/g, '').slice(1);
  const number = Number(strNumbers);

  return isNaN(number) ? 0 : number;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
