'use strict';

const list = document.querySelectorAll('li');
const listArr = [...list];
const listAfterSort = document.querySelector('ul');

const getNumber = (str) => Number(str.split(',').join('').slice(1));

const sortList = (arr) => arr.sort((prev, current) =>
  getNumber(current.dataset.salary) - getNumber(prev.dataset.salary));

sortList(listArr);

for (const item of listArr) {
  listAfterSort.append(item);
};

const getEmployees = (listItem) => [...listItem];

getEmployees(list);
