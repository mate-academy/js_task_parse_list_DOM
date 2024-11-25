'use strict';

const list = document.querySelector('ul');

function strNum(str) {
  const result = [];

  for (let i = 1; i < str.length; i++) {
    if (Number(str[i]) || str[i] === '0') {
      result.push(str[i]);
    }
  }

  return Number(result.join(''));
}

function sortList(someList) {
  const items = Array.from(someList.getElementsByTagName('li'));

  items.sort(
    (a, b) =>
      strNum(b.getAttribute('data-salary')) -
      strNum(a.getAttribute('data-salary')),
  );
  someList.innerHTML = '';
  items.forEach((el) => someList.appendChild(el));
}

function getEmployees(someList) {
  const items = Array.from(someList.getElementsByTagName('li'));

  return items.map((el) => ({
    ...el,
    'data-salary': strNum(el.getAttribute('data-salary')),
  }));
}

sortList(list);
getEmployees(list);
