'use strict';

// write code here

const list = document.querySelectorAll('li');

function sortList(sorList) {
  const newUl = document.querySelector('ul');
  const sort = [...sorList].sort((a, b) =>
    +(b.dataset.salary.replace('$', '').split(',').join(''))
  - +(a.dataset.salary.replace('$', '').split(',').join(''))
  );

  for (const key of sort) {
    newUl.append(key);
  }
}

function getEmployees(employList) {
  const employ = [...employList];
  const arr = [];

  for (let i = 0; i < employ.length; i++) {
    const obj = {};

    obj.name = employ[i].innerText;
    obj.position = employ[i].dataset.position;
    obj.salary = employ[i].dataset.salary;
    obj.age = employ[i].dataset.age;

    arr.push(obj);
  }

  return arr;
}

sortList(list);
getEmployees(list);
