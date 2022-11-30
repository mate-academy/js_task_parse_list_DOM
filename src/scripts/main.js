'use strict';

function decreaseSortOrder() {
  const list = document.querySelector('ul');
  const items = list.childNodes;
  const itemsArr = [];

  for (const i in items) {
    if (items[i].nodeType === 1) {
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort((a, b) => {
    return (
      +b.dataset.salary
        .split('')
        .filter(item => !isNaN(item)).join('')
    ) - (
      +a.dataset.salary
        .split('')
        .filter(item => !isNaN(item)).join('')
    );
  });

  for (let i = 0; i < itemsArr.length; i++) {
    list.appendChild(itemsArr[i]);
  }

  return itemsArr;
}

decreaseSortOrder();
