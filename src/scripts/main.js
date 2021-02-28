'use strict';

// write code here
const colection = document.querySelectorAll('li');
const colectionUl = document.querySelector('ul');

const arrOfLi = [...colection];

function sortList(list) {
  list.sort((a, b) => {
    const first = +(a.dataset.salary.replace('$', '').replace(',', ''));
    const second = +(b.dataset.salary.replace('$', '').replace(',', ''));

    return second - first;
  });
}

function getEmployees(list) {
  colectionUl.append(...arrOfLi);
}

sortList(arrOfLi);
getEmployees(arrOfLi);
