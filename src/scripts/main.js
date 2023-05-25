'use strict';

const mainList = document.querySelector('ul');

const listOfEmployees = [...mainList.children];

function toNumber(el) {
  return Number(el.dataset.salary.slice(1).replace(',', ''));
}

function sortList(list) {
  const sort = list
    .sort((a, b) => toNumber(b) - toNumber(a));

  mainList.append(...sort);
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

// write code here
