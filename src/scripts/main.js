'use strict';

const listMain = document.querySelector('ul');

function convNumber(text) {
  const transformTextPhase1 = text.split('');

  transformTextPhase1.shift();

  const transformTextPhase2 = transformTextPhase1.join('');
  const transformTextPhase3 = transformTextPhase2.split(',').join('');
  const result = Number(transformTextPhase3);

  return result;
}

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [ ...items ];

  for (const elem of itemsArray) {
    const first = elem.dataset.salary;

    elem.dataset.salary = convNumber(first);
  }

  const result = itemsArray.sort((a, b) =>
    Number(b.dataset.salary) - Number(a.dataset.salary));

  for (const elem of result) {
    list.append(elem);
  }
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = [ ...items ];
  const arr = [];

  for (const elem of itemsArray) {
    const obj = {};

    obj.name = elem.innerText;
    obj.position = elem.dataset.position;
    obj.salary = elem.dataset.salary;
    obj.age = elem.dataset.age;
    arr.push(obj);
  }

  return arr;
}

sortList(listMain);
getEmployees(listMain);
