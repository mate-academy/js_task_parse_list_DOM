'use strict';

const list = document.querySelectorAll('li');

const arrList = [...list];
const getNumber = (str) => Number(str.split(',').join('').slice(1));

const sortList = (arr) => arr.sort((prev, current) =>
  getNumber(current.dataset.salary) - getNumber(prev.dataset.salary));

sortList(arrList);

const listAfterSort = document.querySelector('ul');

for (const item of arrList) {
  listAfterSort.append(item);
};

const getEmployees = (listItem) => [...listItem];

getEmployees(list);
