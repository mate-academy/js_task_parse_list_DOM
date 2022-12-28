'use strict';

const ul = document.querySelector('ul');
const listOfWorkers = [...document.querySelectorAll('li')];

function toNum(item) {
  return Number(item.slice(1).split(',').join(''));
}

function sortList(list) {
  const sorted = list.sort(
    (a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary)
  );

  ul.append(...sorted);
}

function getEmployees(list) {
  return [...list].map((worker) => ({
    name: worker.innerText,
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

sortList(listOfWorkers);
getEmployees(listOfWorkers);
