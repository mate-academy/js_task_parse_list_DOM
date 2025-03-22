'use strict';

function convertToNumber(item) {
  return Number(item.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  return Array.from(list.children)
    .sort((a, b) => convertToNumber(b) - convertToNumber(a))
    .forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((person) => {
    return {
      name: person.dataset.name,
      position: person.dataset.position,
      salary: convertToNumber(person),
      age: Number(person.dataset.age),
    };
  });
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
