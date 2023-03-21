'use strict';

const list = document.querySelectorAll('li');

const numberConverter = (item) =>
  parseFloat(item.dataset.salary.replace(/[^+\d]/g, ''));

const sortList = (items, listSelector) => {
  [...items]
    .sort((a, b) => numberConverter(b) - numberConverter(a))
    .forEach((el) => listSelector.append(el));
};

const getEmployees = (items) => {
  return [...items].map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(list, document.querySelector('ul'));
getEmployees(list);
