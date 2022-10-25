'use strict';

const arrList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortForSalary(arr) {
  return arr.sort((a, b) =>
    +b.dataset.salary.split(',').join('').slice(1)
    - +a.dataset.salary.split(',').join('').slice(1));
}

function getObj(arr) {
  const arrPeople = [];

  for (const item of arr) {
    arrPeople.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return arrPeople;
}

for (const item of sortForSalary(arrList)) {
  ul.append(item);
}

getObj(arrList);
