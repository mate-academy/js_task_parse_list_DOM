'use strict';

const list = document.querySelector('ul');
const items = Array.from(document.querySelectorAll('li'));

function getNumber(string) {
  const number = Number(string.replace('$', '').replace(',', ''));

  return number;
}

function sortList(arr) {
  arr.sort(function(a, b) {
    const firstItem = getNumber(a.getAttribute('data-salary'));
    const secondItem = getNumber(b.getAttribute('data-salary'));

    return secondItem - firstItem;
  });

  arr.forEach(element => {
    list.appendChild(element);
  });

  return arr;
}

function getEmployees(arr) {
  return arr.map(function(element) {
    return {
      name: element.innerText,
      position: element.getAttribute('data-position'),
      salary: element.getAttribute('data-salary'),
      age: element.getAttribute('data-age'),
    };
  });
}

sortList(items);
getEmployees(items);
