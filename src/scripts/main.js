'use strict';

function intoValue(str) {
  return Number(str.replace('$', '').replaceAll(',', ''));
}

const list = document.querySelector('ul');

function sortList(ulElement) {
  const arrOfElement = [...ulElement.querySelectorAll('[data-salary]')];

  arrOfElement.sort(
    (a, b) =>
      intoValue(b.getAttribute('data-salary')) -
      intoValue(a.getAttribute('data-salary')),
  );

  for (const element of arrOfElement) {
    ulElement.append(element);
  }
}

function getEmployees(ulElement) {
  const arrOfElement = [...ulElement.querySelectorAll('[data-salary]')];
  const arrOfNewObjects = [];

  for (const element of arrOfElement) {
    const newObj = {
      name: element.textContent.trim(),
      position: element.getAttribute('data-position'),
      salary: intoValue(element.getAttribute('data-salary')),
      age: Number(element.getAttribute('data-age')),
    };

    arrOfNewObjects.push(newObj);
  }

  return arrOfNewObjects;
}

sortList(list);
getEmployees(list);
