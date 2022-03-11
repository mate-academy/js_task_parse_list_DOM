'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const convertToNumber = elem => {
    return +elem.dataset.salary.slice(1).split(',').join('');
  };

  list.sort((a, b) => convertToNumber(b) - convertToNumber(a));

  listOfEmployees.append(...list);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
