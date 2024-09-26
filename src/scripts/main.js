'use strict';

function convertToNumber(numStr) {
  const num = parseInt(numStr.split(',').join('').split('$').join(''));

  return num;
}

function sortList(oldlist) {
  const newList = oldlist.sort((a, b) => {
    const salaryA = convertToNumber(a.getAttribute('data-salary'));
    const salaryB = convertToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  return newList;
}

function getEmployees(oldlist) {
  const objectList = [];

  for (const element of oldlist) {
    const object = {
      name: element.textContent,
      position: element.getAttribute('data-position'),
      salary: element.getAttribute('data-salary'),
      age: element.getAttribute('data-age'),
    };

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
