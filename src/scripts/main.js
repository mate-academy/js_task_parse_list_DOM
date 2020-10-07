'use strict';

const listElements = [...document.getElementsByTagName('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (prev, next) =>  toNumber(next.dataset.salary) - toNumber(prev.dataset.salary);
  );

  ul.append(...listElements);
}

function convertToNumber(string) {
  return Number(string.split(',').join('').split('$').join(''));
}

function getEmployees(list) {
  const listArray = [];

  for (let i = 0; i < listElements.length; i++) {
    const person = list[i];
    const personToObject = {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

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
