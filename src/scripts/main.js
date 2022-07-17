'use strict';

const list = document.querySelector('ul');
const arrLi = [...document.querySelectorAll('li')];

function formatToNum(num) {
  return Number(num.slice(1).split(',').join(''));
}

function sortList(arr) {
  const sortArr = arr.sort((a, b) =>
    formatToNum(b.dataset.salary) - formatToNum(a.dataset.salary));

  for (const elem of sortArr) {
    list.append(elem);
  }
}

function getEmployees(arr) {
  const arrEmployees = [];

  arr.forEach(elem =>
    arrEmployees.push(
      {
        name: elem.innerText,
        position: elem.dataset.position,
        salary: elem.dataset.salary,
        age: elem.dataset.age,
      }
    )
  );

  return arrEmployees;
}

sortList(arrLi);
getEmployees(arrLi);
