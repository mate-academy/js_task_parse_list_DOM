'use strict';

const listUl = document.querySelector('ul');
const listLi = [...document.querySelectorAll('[data-salary')];

function sortList(list) {
  const toNum = (str) => {
    return +str.slice(1).split(',').join('');
  };

  list.sort((a, b) =>
    toNum(b.dataset.salary) - toNum(a.dataset.salary));

  listUl.append(...list);
};

const getEmployees = (list) => {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(listLi);
getEmployees(listLi);
