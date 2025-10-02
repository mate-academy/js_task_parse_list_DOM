'use strict';

const toNumber = (str) => {
  return Number(str.slice(1).split(',').join(''));
};

const sortList = (list) => {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  list.append(...items);
};

const getEmployees = (list) => {
  return [...list.querySelectorAll('li')].map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: toNumber(el.dataset.salary),
    age: Number(el.dataset.age),
  }));
};

const ul = document.querySelector('ul');

sortList(ul);

const employees = getEmployees(ul);

// eslint-disable-next-line no-console
console.log(employees);
