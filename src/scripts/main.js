'use strict';

const ul = document.querySelector('ul');

const li = document.querySelectorAll('li');

const list = [...li];

function sortList(listToSort) {
  function toNumber(value) {
    return Number(value.dataset.salary
      .replace(/\$/g, '')
      .split(',')
      .join(''));
  }

  listToSort.sort((a, b) => {
    const first = toNumber(a);

    const second = toNumber(b);

    return second - first;
  });

  ul.append(...listToSort);
}

function getEmployees(listToObject) {
  return listToObject.map(element => (
    {
      name: element.innerText,
      ...element.dataset,
    }));
}

sortList(list);
getEmployees(list);
