'use strict';

const nodes = document.querySelectorAll('li');
const list = document.querySelector('ul');

const frag = document.createDocumentFragment();

const sortedList = Array.from(nodes).sort((a, b) =>
  parseInt(a.dataset.salary.replace(/\D/g, ''))
- parseInt(b.dataset.salary.replace(/\D/g, '')));

const sortList = function(someList) {
  for (const item of sortedList) {
    frag.prepend(item);
  }
  list.appendChild(frag);
};

sortList(list);

const getEmployees = function() {
  const massive = [];

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
