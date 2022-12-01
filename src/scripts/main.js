'use strict';

function sortList() {
  const fullList = document.querySelector('ul');
  const items = fullList.childNodes;
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
    fullList.appendChild(itemsArr[i]);
  }

  return itemsArr;
}

function getEmployees() {
  const fullList = document.querySelector('ul');
  const items = fullList.childNodes;
  const itemsArr = [];

  for (const i in items) {
    if (items[i].nodeType === 1) {
      itemsArr.push(items[i]);
    }
  }

  const objectsArr = itemsArr.map(item => (
    {
      name: item.innerText, ...item.dataset,
    }
  ));

  return objectsArr;
}

sortList();
getEmployees();
