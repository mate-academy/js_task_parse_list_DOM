'use strict';

const listWrapper = document.querySelector('ul');
const employeesList = [...listWrapper.children];

function sortList(list) {
  return list.sort(
    (first, second) =>
      salaryToNumber(second.dataset.salary) -
      salaryToNumber(first.dataset.salary),
  );
}

function salaryToNumber(number = '') {
  return +number.slice(1).split(',').join('');
}

function getEmployees(list) {
  delete listWrapper.children;

  for (const el of list) {
    const text = el.textContent;

    el.setAttribute('data-name', text);
    listWrapper.appendChild(el);
  }
}

getEmployees(sortList(employeesList));
