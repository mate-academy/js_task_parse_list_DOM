'use strict';

const fullList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertToNumber(element) {
  return Number(element.slice(1).replaceAll(',', ''));
}

function sortList(elements) {
  return Array.from(elements).sort(
    (el1, el2) =>
      convertToNumber(el2.dataset.salary) - convertToNumber(el1.dataset.salary),
  );
}

const sortedList = sortList(employees);

fullList.textContent = '';

sortedList.map((item) => fullList.append(item));
