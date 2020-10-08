'use strict';

const listElements = [...document.getElementsByTagName('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (prev, next) => {
      return toNumber(next.dataset.salary) - toNumber(prev.dataset.salary);
    }
  );

  ul.append(...listElements);
}

function toNumber(string) {
  return Number(string.split(',').join('').split('$').join(''));
}

function getEmployees(list) {
  const listArray = [];

  for (let i = 0; i < listElements.length; i++) {
    listArray.push(
      {
        name: list[i].innerText,
        position: list[i].dataset.position,
        salary: list[i].dataset.salary,
        age: list[i].dataset.age,
      }
    );
  }

  return listArray;
}

sortList(listElements);
getEmployees(listElements);
