'use strict';

const lists = [...document.querySelectorAll('li')];
const unList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary));
  unList.append(...list);
}

function toNum(money) {
  return money.replace(/[^0-9.-]+/g, '');
}

function getEmployees(list) {
  list.map(el => {
    return {
      name: el.innerText,
      positon: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(lists);
getEmployees(lists);
