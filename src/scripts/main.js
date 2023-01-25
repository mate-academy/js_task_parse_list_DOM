'use strict';

const listOfEmployees = document.querySelector('ul');
const arrOfEmployees = [...document.querySelectorAll('li')];

function convertToNumber(value) {
  return +value.slice(1).split(',').join('');
}

function sortList(item) {
  const sortItem = item.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  listOfEmployees.append(...sortItem);
};

sortList(arrOfEmployees);

function getEmployees(item) {
  return item.map(el => ({
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
  }));
}

getEmployees(arrOfEmployees);
