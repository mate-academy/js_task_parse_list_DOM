'use strict';

const list = document.querySelectorAll('li[data-salary]');
const newList = sortList(list);

getEmployees(newList);

function sortList(colections) {
  return [...colections].sort(function(a, b) {
    const numberA = stringToNumber(a.dataset.salary);
    const numberB = stringToNumber(b.dataset.salary);

    return numberB - numberA;
  });
}

function stringToNumber(string) {
  return +string.split(',').join('').slice(1);
}

function getEmployees(arr) {
  return arr.map(item => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}
