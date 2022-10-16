'use strict';

// debugger;

const listItems = [...document.querySelectorAll('li')];

const sortList = function(list) {
  list.sort((a, b) =>
    moneyToNumber(b.dataset.salary) - moneyToNumber(a.dataset.salary));

  for (let i = 0; i < (list.length - 1); i++) {
    list[i].after(list[i + 1]);
  };
};

const moneyToNumber = function(str) {
  const withoutDollar = str.split('$').join('');

  return +withoutDollar.split(',').join('');
};

const getEmployees = function(list) {
  const dataList = list.map(item => ({ ...item.dataset }));

  return dataList.map((el, i) => ({
    ...el,
    name: listItems[i].innerText,
  }));
};

sortList(listItems);
getEmployees(listItems);
