'use strict';

const items = [...document.querySelectorAll('[data-salary]')];
const ul = document.querySelector('ul');

function sortList(list) {
  return list.sort(
    (firstItem, secondItem) =>
      getIterableItems(firstItem) - getIterableItems(secondItem),
  );
}

function getIterableItems(item) {
  const result = item
    .getAttribute('data-salary')
    .split('')
    .filter((el) => Number.isInteger(+el))
    .join('');

  return parseInt(result);
}

const newList = sortList(items).reverse();

newList.forEach((item) => ul.appendChild(item));
