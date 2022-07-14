'use strict';

const listUl = document.querySelector('ul');
const listLi = [...document.querySelectorAll('li')];

function sortList(list) {
  const toNumber = el => +el.dataset.salary.slice(1).split(',').join('');

  list.sort((a, b) => toNumber(b) - toNumber(a));

  listUl.append(...list);
}

function getEmployees(list) {
  return list.map(el => ({
    name: el.innerText,
    ...el.dataset,
  }));
}

sortList(listLi);
getEmployees(listLi);
