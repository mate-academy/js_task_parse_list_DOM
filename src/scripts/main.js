'use strict';

const mas = document.querySelectorAll('li');
const newMas = [...mas];
const arr = document.querySelector('ul');

function sortList(list) {
  for (const num of list) {
    const key = num.dataset.salary.replace(/\D+/g, '');

    num.dataset.salary = key;
  }

  list.sort((a, b) => b.dataset.salary - a.dataset.salary);
  arr.append(...list);
}

function getEmployees(list) {
  return list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(newMas);
getEmployees(newMas);
