'use strict';

const fullList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertToNumber(number) {
  return +number.slice(1).replaceAll(',', '');
}

function sortList(list) {
  return [...list].sort((a, b) => {
    return convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary);
  });
}

const sortedList = sortList(employees);

fullList.textContent = '';

sortedList.map(item => fullList.append(item));
