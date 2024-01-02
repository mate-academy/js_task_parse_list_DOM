'use strict';

const items = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(item) {
  const sortItems = [...item].sort((a, b) =>
    convert(b) - convert(a));

  items.append(...sortItems);
};

function convert(str) {
  return +str.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(property) {
  const arr = [];

  [...property].forEach(employee => {
    const obj = {};

    obj.name = employee.innerText;
    obj.position = employee.dataset.position;
    obj.salary = employee.dataset.salary;
    obj.age = employee.dataset.age;

    arr.push(obj);
  });

  return arr;
}

getEmployees(list);
sortList(list);
