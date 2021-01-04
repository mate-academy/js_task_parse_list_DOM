'use strict';

function sortList() {
  const list = document.querySelector('ul');

  const items = list.childNodes;
  const itemsArr = [];

  for (const i in items) {
    if (items[i].nodeType === 1) {
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function(a, b) {
    return +a.dataset.salary.replace(/[$,]/g, '') === +b
      .dataset.salary.replace(/[$,]/g, '')
      ? 0
      : (+b.dataset.salary.replace(/[$,]/g, '') > +a
        .dataset.salary.replace(/[$,]/g, '') ? 1 : -1);
  });

  for (let i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
}

function getEmployees() {
  return [...document.getElementsByTagName('li')]
    .map(item => ({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary.replace(/[$,]/g, ''),
      age: item.dataset.age,
    }));
}

sortList();
getEmployees();
