'use strict';

const nodes = document.querySelectorAll('li');
const list = document.querySelector('ul');

const fragment = document.createDocumentFragment();

function sortList() {
  const sortedList = Array.from(nodes).sort((a, b) =>
    parseInt(a.dataset.salary.replace(/\D/g, ''))
- parseInt(b.dataset.salary.replace(/\D/g, '')));

  for (const item of sortedList) {
    fragment.prepend(item);
  }
  list.appendChild(fragment);
};

sortList(list);

const getEmployees = function() {
  const massive = [];
  const sortedList = Array.from(nodes).sort((a, b) =>
    parseInt(a.dataset.salary.replace(/\D/g, ''))
- parseInt(b.dataset.salary.replace(/\D/g, '')));

  for (const item of sortedList) {
    const object = {
      name: item.innerText,
      salary: item.dataset.salary,
      position: item.dataset.position,
      age: item.dataset.age,
    };

    massive.push(object);
  }

  return massive;
};

getEmployees();
