'use strict';

const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

function convertNumber(str) {
  const newStr = str.slice(1);

  return +newStr.split(',').join('');
}

function sortList(arr) {
  const sortArr = Array.from(arr);

  sortArr.sort((a, b) => {
    const first = convertNumber(a.getAttribute('data-salary'));
    const second = convertNumber(b.getAttribute('data-salary'));

    return second > first ? 1 : second < first ? -1 : 0;
  });

  for (const item of sortArr) {
    list.appendChild(item);
  }

  return sortArr;
}

function getEmployees(arr) {
  const arrObjects = [];

  for (const item of arr) {
    const attrs = item.getAttributeNames().reduce((acc, atname) => {
      return {
        ...acc, [atname]: item.getAttribute(atname),
      };
    }, {});

    arrObjects.push(attrs);
  }

  return arrObjects;
}

sortList(items);
getEmployees(items);
