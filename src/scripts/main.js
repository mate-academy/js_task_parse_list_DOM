'use strict';

const listEmployees = [...document.querySelectorAll('li')];

const toNum = (el) => +el.match(/\d+/g).join('');

const sortList = (list) => {
  list.sort((a, b) => {
    return toNum(b.dataset.salary)
      - toNum(a.dataset.salary);
  });

  document.querySelector('ul').append(...list);
};

const getEmployee = (list) => {
  const newObjects = [];

  for (let i = 0; i < list.length; i++) {
    const obj = {};

    obj.name = list[i].innerText;
    obj.position = list[i].dataset.position;
    obj.salary = list[i].dataset.salary;
    obj.age = list[i].dataset.age;

    newObjects.push(obj);
  }

  return newObjects;
};

sortList(listEmployees);
getEmployee(listEmployees);
