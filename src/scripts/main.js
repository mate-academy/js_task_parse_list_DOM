'use strict';

const list = document.querySelector('ul');

function transformInNumbers(str) {
  return parseInt(str.split(',').join('').slice(1));
}

function sortList(arr) {
  const items = [...arr.children].sort(
    (a, b) =>
      transformInNumbers(b.dataset.salary) -
      transformInNumbers(a.dataset.salary),
  );

  list.innerHTML = '';
  items.forEach((item) => arr.appendChild(item));
}

const getEmployees = (arr) =>
  [...arr.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary),
    age: Number(item.dataset.age),
  }));

sortList(list);

getEmployees(list);
