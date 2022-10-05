'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');
const arr = [...items];

const sortList = (employees) => {
  const sorted = (item) => item.dataset['salary'].slice(1).replace(',', '.');

  arr.sort((itemOne, itemTwo) => sorted(itemTwo) - sorted(itemOne));

  return arr;
};

const getEmployees = (place, employees) => {
  employees.forEach(element => place.append(element));
};

sortList(items);
getEmployees(list, arr);
