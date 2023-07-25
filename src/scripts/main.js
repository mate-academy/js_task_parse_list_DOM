'use strict';

const list = document.querySelector('ul');
const listItems = Array.from(list.children);

function toNumber(salaryString) {
  return parseInt(salaryString.replace(/[^0-9]/g, ''));
}

function sortList(arr) {
  arr.sort((a, b) => {
    const salaryA = toNumber(a.getAttribute('data-salary'));
    const salaryB = toNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });
}

function getEmployees(employee) {
  employee.innerHTML = '';

  listItems.forEach((item) => {
    employee.appendChild(item);
  });
}

sortList(listItems);
getEmployees(list);
