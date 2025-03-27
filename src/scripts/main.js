'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...listOfEmployees.children];

const toNumber = (string) => {
  return Number(string.dataset.salary.slice(1).split(',').join(''));
};

function sortList(list) {
  const sorted = list.sort((a, b) => toNumber(b) - toNumber(a));

  listOfEmployees.append(...sorted);
};

function getEmployees(list) {
  const listOfObjects = list.map(key => ({
    name: key.innerText,
    position: key.dataset.position,
    salary: key.dataset.salary,
    age: key.dataset.age,
  }));

  return listOfObjects;
};

sortList(employees);
getEmployees(employees);
