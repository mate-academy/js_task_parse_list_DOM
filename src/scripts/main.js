'use strict';

const oldList = document.querySelectorAll('li');

const newOrder = sortList(oldList);

getEmployees(newOrder);

function sortList(list) {
  const newList = [...list]
    .sort((a, b) => convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary));

  newList.forEach(worker => document.querySelector('ul').append(worker));

  return newList;
}

function getEmployees(list) {
  return list.map(worker => ({
    name: worker.innerText,
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

function convertToNumber(string) {
  let result = '';

  for (const char of string) {
    if (isFinite(char)) {
      result += char;
    }
  }

  return +result;
};
