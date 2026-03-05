'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

function getNumber(element) {
  return Number(element.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(li, unList) {
  li.sort((el1, el2) => getNumber(el2) - getNumber(el1));
  unList.append(...li);

  return li;
}

function getEmployees(li) {
  return li.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: Number(el.dataset.age),
  }));
}

sortList(list, ul);
getEmployees(list);
