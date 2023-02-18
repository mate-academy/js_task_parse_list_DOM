'use strict';

const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

function sortList(items) {
  const sortItems = items.sort(
    (a, b) =>
      (+b.dataset.salary.slice(1).split(',').join(''))
      - (+a.dataset.salary.slice(1).split(',').join(''))
  );

  ul.append(...sortItems);
}

function getEmployees(items) {
  return items.map(item => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(li);
getEmployees(li);
