'use strict';

const lists = [...document.querySelectorAll('li')];
const unList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary));
  unList.append(...list);
}

function toNum(money) {
  let result = '';

  for (const i of money) {
    if (('0123456789').includes(i)) {
      result += i;
    }
  }

  return +result;
}

function getEmployees(list) {
  return list.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(lists);
getEmployees(lists);
