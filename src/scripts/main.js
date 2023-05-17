'use strict';

const listMain = document.querySelector('ul');

function convNumber(text) {
  return Number(text.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [ ...items ];

  const result = itemsArray.sort((a, b) =>
    convNumber(b.dataset.salary) - convNumber(a.dataset.salary));

  for (const elem of result) {
    list.append(elem);
  }
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [ ...items ];
  const arr = [];

  for (const elem of itemsArray) {
    arr.push({
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    });
  }

  return arr;
}

sortList(listMain);
getEmployees(listMain);
