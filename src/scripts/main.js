'use strict';

function camparator(a, b) {
  if (a.dataset.salary > b.dataset.salary) {
    return -1;
  } else if (a.dataset.salary < b.dataset.salary) {
    return 1;
  }

  return 0;
}

const salary = document.querySelectorAll(['[data-salary]']);
const salaryArrey = [...salary];

const sorted = salaryArrey.sort(camparator);

sorted.forEach(item => document.querySelector('ul').appendChild(item));

const list = document.querySelector('ul');
const firstLi = document.querySelector('li');

list.append(firstLi);
