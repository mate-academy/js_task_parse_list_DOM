'use strict';

const myList = document.querySelector('ul');
const employees = [...myList.children];

const toNumber = (string) => {
  return Number(string.dataset.salary.slice(1).split(',').join(''));
};

function sortList(list) {
  const sort = list.sort((a, b) => toNumber(b) - toNumber(a));

  myList.append(...sort);
}

function getEmployee(list) {
  const listOfObjects = list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return listOfObjects;
}

sortList(employees);
getEmployee(employees);
