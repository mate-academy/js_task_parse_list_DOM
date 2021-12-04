'use strict';

const list = document.querySelectorAll('li');

function sortList(lists) {
  const ul = document.querySelector('ul');

  const sortedPeople = [...lists].sort((a, b) => {
    return (+b.dataset.salary.replace(/\$|,/gm, '')
          - +a.dataset.salary.replace(/\$|,/gm, ''));
  });

  for (const key in sortedPeople) {
    ul.append(key);
  };
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

sortList(list);
getEmployees(list);
