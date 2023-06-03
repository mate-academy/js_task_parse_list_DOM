'use strict';

const mainList = document.querySelector('ul');

const listOfEmployees = Array.from(mainList.children);

function toNumber(el) {
  return Number(el.dataset.salary.slice(1).replace(',', ''));
}

function sortList(list) {
  const sortedList = list
    .sort((a, b) => toNumber(b) - toNumber(a));

  const newList = document.createElement('ul');

  newList.append(...sortedList);

  mainList.replaceWith(newList);
}

function getEmployees(list) {
  const listOfObjects = list.map(element => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));

  return listOfObjects;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
