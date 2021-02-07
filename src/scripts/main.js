'use strict';

const employees = document.querySelectorAll('li');
const unorderedList = document.querySelector('ul');

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = a.dataset.salary.substring(1).split(',').join('');
    const salaryB = b.dataset.salary.substring(1).split(',').join('');

    return +salaryB - +salaryA;
  });
};

unorderedList.innerHTML = '';

function getEmployees(list) {
  unorderedList.append(...list);
};

const sortedList = sortList([...employees]);

getEmployees(sortedList);
