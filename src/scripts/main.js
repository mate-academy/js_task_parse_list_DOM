'use strict';

const collection = [...document.querySelectorAll('li')];

function toNumber(string) {
  return Number(string.slice(1).split(',').join(''));
}

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const array = list.map(employee => ({
    name: employee.innerText,
    position: employee.position,
    salary: employee.salary,
    age: employee.age,
  }));

  return array;
}

sortList(collection);
getEmployees(collection);
