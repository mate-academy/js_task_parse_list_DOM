'use strict';

function toNumber(numStr) {
  const num = parseInt(numStr.split(',').join('').split('$').join(''));

  return num;
}

function sortList(oldlist) {
  const newList = oldlist.sort((a, b) => {
    const salaryA = toNumber(a.getAttribute('data-salary'));
    const salaryB = toNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  return newList;
}

function getEmployees(oldlist) {
  const objectList = [];

  for (const element of oldlist) {
    const object = {};

    object.name = element.textContent;
    object.position = element.getAttribute('data-position');
    object.salary = element.getAttribute('data-salary');
    object.age = element.getAttribute('data-age');

    objectList.push(object);
  }

  return objectList;
}

const listNode = document.querySelectorAll('li');
const list = [...listNode];
const sortedList = sortList(list);
const ul = document.querySelector('ul');

ul.append(...sortedList);
getEmployees(list);
