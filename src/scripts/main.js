'use strict';

const list = document.querySelector('ul').children;

function sortList(params) {
  const sort = [...params].sort((itemA, itemB) => {
    const numA = toNumber(itemA);
    const numB = toNumber(itemB);

    return numB - numA;
  });

  for (let i = 0; i < sort.length; i++) {
    list[i].before(sort[i]);
  }

  return list;
}

function toNumber(number) {
  return number.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(params) {
  return [...params].map((item, index) => ({
    name: item.innerText,
    position: index,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
