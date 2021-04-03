'use strict';

const list = document.querySelector('ul');
const arrLi = [...document.querySelectorAll('li')];

const sortSallary = (a, b) => {
  const first = Number(a.dataset.salary.slice(1).split(',').join(''));
  const second = Number(b.dataset.salary.slice(1).split(',').join(''));

  return second - first;
};

const sortList = (arr) => {
  return [...arr].sort(sortSallary);
};

const getEmployees = (arrList) => {
  const newList = document.createElement('ul');

  sortList(arrList).forEach(elem => {
    const item = document.createElement('li');

    item.dataset.position = elem.dataset.position;
    item.dataset.salary = elem.dataset.salary;
    item.dataset.age = elem.dataset.age;
    item.innerText = elem.innerText;
    newList.append(item);
  });

  return newList;
};

list.before(getEmployees(arrLi));
list.remove();
