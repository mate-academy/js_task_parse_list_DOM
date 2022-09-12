'use strict';

const employees = document.querySelectorAll('li');

const masList = [...employees];

const getNum = function(str) {
  return Number(str.replaceAll(',', '').slice(1));
};

const sortList = function(arr) {
  return arr.sort((a, b) =>
    getNum(a.dataset.salary) - getNum(b.dataset.salary));
};

sortList(masList);

const ul = document.querySelector('ul');

for (const item of masList) {
  ul.append(item);
}

const getEmployees = function(list) {
  return [...list].map(el => ({
    name: el.innerText,
    position: el.dataset,
    salary: el.dataset,
    age: el.dataset,
  }));
};

getEmployees(masList);
