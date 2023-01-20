'use strict';

// write code here
const ul = document.querySelector('ul');
const list = document.querySelectorAll('li');
const sumString = string => +string.slice(1).split(',').join('');

const sortList = function(items) {
  return [...items].sort((a, b) =>
    sumString(b.dataset.salary) - sumString(a.dataset.salary));
};

ul.append(...sortList(list));

const getEmployees = function(items) {
  return [...items].map(item => {
    return ({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });
};

getEmployees(list);
