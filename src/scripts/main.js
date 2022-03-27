'use strict';

function sortList() {
  const elem = document.querySelectorAll('li');
  const list = document.querySelector('ul');

  const newElem = [...elem].sort((a, b) => {
    const numA = a.dataset.salary.split(',').join('').split('$').join('');
    const numB = b.dataset.salary.split(',').join('').split('$').join('');

    return Number(numB) - Number(numA);
  });

  for (const index of newElem) {
    list.append(index);
  }
}

function getEmployees() {
  const arr = [];
  const elem = document.querySelectorAll('li');

  for (let i = 0; i < elem.length; i++) {
    const obj = {};

    obj.name = elem[i].innerHTML.trim();
    obj.position = elem[i].dataset.position;
    obj.salary = elem[i].dataset.salary;
    obj.age = elem[i].dataset.age;

    arr.push(obj);
  }

  return arr;
}

sortList();
getEmployees();
