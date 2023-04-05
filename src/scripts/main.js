'use strict';

const items = document.querySelectorAll('li');

function getNumber(el) {
  return +el.dataset.salary.slice(1, el.length).split(',').join('.');
}

function sortList([...array], callback) {
  return array.sort((a, b) => callback(b) - callback(a));
}

const sortedList = sortList(items, getNumber);

const newList = document.getElementsByTagName('ul')[0];

newList.innerHTML = sortedList.map((item, i) =>
  `<li
    data-position=${sortedList[i].dataset.position}
    data-salary=${sortedList[i].dataset.salary}
    data-age=${sortedList[i].dataset.age}
  >
    ${sortedList[i].innerText}
  </li>`
).join('');
