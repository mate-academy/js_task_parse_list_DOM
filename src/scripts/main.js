'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function convertToNumber(value) {
  return +value.split(',').join('').slice(1);
}

function sortList(list) {
  const sorted = list.sort((a, b) => {
    return (convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary));
  });

  listOfEmployees.append(...sorted);
};

sortList(employees);

function getEmployees(list) {
  return list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

getEmployees(employees);
