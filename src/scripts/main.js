'use strict';

const mainList = document.querySelector('ul');
const listElements = document.querySelectorAll('li');

function toNumber(value) {
  return +value.slice(1).split(',').join('');
}

function sortList(list) {
  const sortEmployees = [...list].sort((prev, next) => {
    return toNumber(next.dataset.salary) - toNumber(prev.dataset.salary);
  });

  mainList.append(...sortEmployees);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

sortList(listElements);
getEmployees(listElements);
// write code here
