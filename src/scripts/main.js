'use strict';

const startList = document.querySelector('ul');

const sortList = (list) => {
  const persons = list.querySelectorAll('li');

  const array = [...persons].sort((a, b) => +b.dataset.salary
    .replace(',', '').slice(1) - +a.dataset.salary.replace(',', '').slice(1));

  list.append(...array);
};

const getEmployees = (list) => {
  const obj = list.querySelectorAll('li');

  return [...obj].map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(startList);
getEmployees(startList);
