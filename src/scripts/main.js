'use strict';

const element = document.body.children[1];
const list = element.children;

const sumString = string => +string.slice(1).split(',').join('');

const sortList = function() {
  return [...list].sort((a, b) =>
    sumString(b.dataset.salary) - sumString(a.dataset.salary));
};

element.append(...sortList(list));

const getEmployees = function() {
  const arrayList = [...list];

  return arrayList.map(x => ({
    name: x.innerText,
    position: x.getAttribute('data-position'),
    salary: x.getAttribute('data-salary'),
    age: x.getAttribute('data-age'),
  }));
};

getEmployees(list);
