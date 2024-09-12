'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

const sortList = (list) => {
  const result = [...list].sort((a, b) =>
    (b.dataset.salary.slice(1).split(',').join(''))
  - (a.dataset.salary.slice(1).split(',').join('')));

  for (const i of result) {
    ul.append(i);
  }
};

const getEmployees = (list) => {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(li);
getEmployees(li);
