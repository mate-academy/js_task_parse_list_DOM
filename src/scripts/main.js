'use strict';

function sortList() {
  const list = document.querySelector('ul');
  const itemsArr = [...list.children];

  itemsArr.sort(function(a, b) {
    const A = +a.dataset.salary.replace(/[$,]/g, '');
    const B = +b.dataset.salary.replace(/[$,]/g, '');

    return B - A;
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
