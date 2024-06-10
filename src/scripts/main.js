'use strict';

const list = document.querySelector('ul');

function sortList(param) {
  const elements = [...param.getElementsByTagName('li')];

  elements.sort(
    (a, b) =>
      Number(b.dataset.salary.slice(1).split(',').join('')) -
      Number(a.dataset.salary.slice(1).split(',').join('')),
  );

  list.innerHTML = '';

  elements.forEach((e) => list.appendChild(e));
}

function getEmployees(param) {
  const elements = [...param.getElementsByTagName('li')];
  const result = [];

  elements.forEach((e) => {
    const array = {};

    array.name = e.textContent.trim();
    array.position = e.dataset.position;
    array.salary = e.dataset.salary;
    array.age = e.dataset.age;

    result.push(array);
  });

  return result;
}

sortList(list);
getEmployees(list);
