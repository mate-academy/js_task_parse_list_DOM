'use strict';

// write code here
const list = document.querySelector('ul');
const listOfEmployees = [...list.children];

function toNum(str) {
  return +str.split('').filter(char => '0123456789'.includes(char)).join('');
}

function sortList(array) {
  const sortedBySalary = array.sort((prev, next) =>
    toNum(next.dataset.salary) - toNum(prev.dataset.salary)
  );

  sortedBySalary.map(elem => list.append(elem));
}

function getEmployees(array) {
  return array.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
