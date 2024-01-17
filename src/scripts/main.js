'use strict';

const myList = document.querySelector('ul');

const sortList = function(list) {
  const listElements = Array.prototype.slice.call(list.children);

  const sortListElements = listElements.sort((a, b) => {
    const solaryA = +a.dataset.salary.slice(1).replaceAll(',', '');
    const solaryB = +b.dataset.salary.slice(1).replaceAll(',', '');

    if (solaryA > solaryB) {
      return -1;
    }

    if (solaryA < solaryB) {
      return 1;
    }

    return 0;
  });

  list.innerHTML = '';

  sortListElements.forEach(element => {
    list.appendChild(element);
  });
};

sortList(myList);
