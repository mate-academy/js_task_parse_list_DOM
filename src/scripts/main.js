'use strict';

const list = document.querySelector('ul');
const listItem = document.querySelectorAll('li');

function format(item) {
  return +item.replace(/\D/g, '');
}

function sortList(item) {
  const result = [...item];

  result.sort((a, b) => format(b.dataset.salary) - format(a.dataset.salary));
  list.append(...result);
}

function getEmployees(item) {
  const result = [...item];

  for (let a = 0; a < result.length; a++) {
    result[a] = { ...result[a].dataset };
  };

  return result;
}

sortList(listItem);
getEmployees(listItem);
