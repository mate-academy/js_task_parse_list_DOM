'use strict';

const list = document.querySelector('ul');
const sortSallary = (a, b) => {
  const first = Number(a.dataset.salary.slice(1).split(',').join(''));
  const second = Number(b.dataset.salary.slice(1).split(',').join(''));

  return second - first;
};

const sortList = (arr) => {
  return [...arr].sort(sortSallary);
};

const getEmployees = (listUl) => {
  const newList = document.createElement('ul');
  const arr = [...document.querySelectorAll('li')];

  sortList(arr).forEach(elem => {
    const item = document.createElement('li');

    item.dataset.position = elem.dataset.position;
    item.dataset.salary = elem.dataset.salary;
    item.dataset.age = elem.dataset.age;
    item.innerText = elem.innerText;
    newList.append(item);
  });

  return newList;
};

list.before(getEmployees(list));
list.remove();
