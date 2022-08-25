'use strict';

const list = document.querySelector('ul');

function sortList() {
  const people = [...list.children];

  people.sort((a, b) => parse(b.dataset.salary)
  - parse(a.dataset.salary));

  function parse(arr) {
    const number = arr.split(',').join('').split('$').join('');

    return +number;
  }

  for (const li of people) {
    list.append(li);
  }
}

function getEmployees() {
  const arrayPeople = [];

  for (const date of list.children) {
    const obj = {};

    obj.name = date.innerText;

    for (const key in date.dataset) {
      obj[key] = date.dataset[key];
    }
    arrayPeople.push(obj);
  }

  return arrayPeople;
};

sortList();
getEmployees();
