'use strict';

const list = document.querySelector('ul');
const itemsList = [...document.querySelectorAll('li')];

function sortListSalary(items) {
  items.sort((itemA, itemB) => {
    const saleryA = +itemA.dataset.salary.slice(1).split(',').join('');
    const saleryB = +itemB.dataset.salary.slice(1).split(',').join('');

    return saleryB - saleryA;
  });

  for (let i = 0; i < items.length; i++) {
    list.children[i].replaceWith(items[i].cloneNode(true));
  }

  return list;
}

sortListSalary(itemsList);
