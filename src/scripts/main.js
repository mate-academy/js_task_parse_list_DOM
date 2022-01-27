'use strict';

const list = [...document.querySelectorAll('li')];
const unList = document.querySelector('ul');

function sortList(arr) {
  const sortAction = val =>
    +val.dataset.salary.split(',').join('').split('$').join('');

  return arr.sort((a, b) => sortAction(b) - sortAction(a));
}

const sortedList = sortList(list);

unList.innerHTML = `
  ${sortedList.map(element =>
    element.outerHTML
  ).join('')}
`;
