'use strict';

const ul = document.querySelector('ul');
const items = [...ul.children];

function getEmployees(list) {
  return list.map(item => {
    const object = {};

    object.name = item.outerText;
    object.position = item.dataset.position;
    object.salary = item.dataset.salary;
    object.age = item.dataset.age;

    return object;
  });
}

function makeNum(string) {
  return +string.replace('$', '').replace(',', '');
};

function sortList(list) {
  const sorted = list.sort((a, b) =>
    makeNum(b.dataset.salary) - makeNum(a.dataset.salary));

  ul.append(...sorted);
}

getEmployees(items);
sortList(items);
