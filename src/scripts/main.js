'use strict';

const fullList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertToNumber(number) {
  return +number.slice(1).replaceAll(',', '');
}

function sortList(list) {
  return [...list].sort((list1, list2) => {
    return (
      convertToNumber(list2.dataset.salary) -
      convertToNumber(list1.dataset.salary)
    );
  });
}

const sortedList = sortList(employees);

fullList.textContent = '';

sortedList.map((item) => fullList.append(item));
