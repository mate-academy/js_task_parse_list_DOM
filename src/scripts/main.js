'use strict';

// write code here
function sortList() {
  const list = [...document.querySelectorAll('ul li')];

  list.sort((a, b) => {
    const item1 = parseInt(a.dataset.salary.replace(/[\D]/g, ''));
    const item2 = parseInt(b.dataset.salary.replace(/[\D]/g, ''));

    return item2 - item1;
  });

  list.forEach((item) => {
    document.querySelector('ul').appendChild(item);
  });
}

function getEmployees() {
  const list = [...document.querySelectorAll('ul')];

  return list.map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: parseInt(item.dataset.salary.replace(/[\D]/g, '')),
    age: parseInt(item.dataset.age),
  }));
}

sortList();
getEmployees();
