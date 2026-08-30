'use strict';

const List = document.querySelector('ul');
const list = document.querySelectorAll('li');
const salariesMap = new Map();

function converter(item) {
  const value = +item.dataset.salary.replace(/[$,]/g, '');

  return value;
}

function sortList(nodelist) {
  nodelist.forEach((item) => {
    salariesMap.set(item, converter(item));
  });

  const sortedArr = Array.from(salariesMap.entries());

  sortedArr.sort((a, b) => b[1] - a[1]);

  return sortedArr;
}

const sortedList = sortList(list);

for (let i = 0; i < sortedList.length; i++) {
  List.appendChild(sortedList[i][0]);
}
