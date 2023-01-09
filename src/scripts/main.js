'use strict';

const listItems = [...document.querySelectorAll('li')];
const list = document.getElementsByTagName('ul')[0];

const getNumber = (salary) => {
  return Number(salary
    .replace(',', '')
    .replace('$', ''));
};

const sortList = (employees) => {
  return employees.sort((li1, li2) => (
    getNumber(li2.dataset.salary) - getNumber(li1.dataset.salary)));
};

const getEmployees = (employees) => {
  for (const item of employees) {
    list.append(item);
  }
};

sortList(listItems);
getEmployees(listItems);
