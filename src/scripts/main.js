'use strict';

// write code here
const list = document.querySelector('ul');
const listItems = [...list.children];

function sortList(items) {
  function doNumber(str) {
    return +str.slice(1).split(',').join('');
  }

  items.sort((a, b) => {
    return doNumber(b.dataset.salary) - doNumber(a.dataset.salary);
  });
  list.append(...items);
}

function getEmployees(arr) {
  return arr.forEach(elem => ({
    name: elem.innerText,
    ...elem.dataset,
  }));
}

sortList(listItems);
getEmployees(listItems);
