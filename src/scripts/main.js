'use strict';

const list = document.querySelector('ul');

function sortList(value) {
  const newList = [...value.children];
  const sorting = item => item.dataset.salary.replace(/[^0-9]/g, '');

  return newList.sort((item1, item2) => sorting(item1) - sorting(item2));
}

function getEmployers(value) {
  for (const item of value) {
    item.remove();
    list.prepend(item);
  }
}

getEmployers(sortList(list));
