'use strict';

const list = document.querySelectorAll('li');

const sorted = function sortList(items) {
  const arr = [...items];

  for (let i = 0; i < arr.length; i++) {
    for (let y = 1; y < arr.length; y++) {
      let hub = 0;

      if (arr[i].dataset.salary.replace(/\$|,/gm, '')
       < arr[y].dataset.salary.replace(/\$|,/gm, '')) {
        hub = arr[i];
        arr[i] = arr[y];
        arr[y] = hub;
      }
    }
  }

  return arr;
};

function getEmployees(items) {
  const arr = [];

  for (const key of items) {
    const obj = {};

    obj.name = key.innerText;
    obj.position = key.dataset.position;
    obj.salary = key.dataset.salary;
    obj.age = key.dataset.age;

    arr.push(obj);
  };

  return arr;
};

getEmployees(sorted(list));
