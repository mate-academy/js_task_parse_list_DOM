'use strict';

const listPeople = document.querySelector('ul');
const listMen = document.querySelectorAll('li');

function transformMoney(string) {
  return +string.slice(1).split(',').join('');
};

function sortList(list) {
  const sortColeclect = [...list].sort((a, b) =>
    transformMoney(b.dataset.salary) - transformMoney(a.dataset.salary));

  listPeople.append(...sortColeclect);
};

function getEmployees(list) {
  return [...list].map(element => ({
    name: listPeople.innerText,
    position: listPeople.dataset.position,
    salary: listPeople.dataset.salary,
    age: listPeople.dataset.age,
  }));
};

sortList(listMen);
getEmployees(listMen);
