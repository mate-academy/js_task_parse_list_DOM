'use strict';

const toNumber = (value) => {
  return +value.dataset.salary.replace(/[$,]/g, '');
};

const sortList = (list) => {
  const items = [...list.children].sort((a, b) => {
    return toNumber(b) - toNumber(a);
  });

  items.forEach((el) => list.append(el));
};

const getEmployees = (list) => {
  return [...list.children].map((el) => ({
    name: el.innerHTML,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

const element = document.querySelector('ul');

sortList(element);
getEmployees(element);
