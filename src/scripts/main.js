'use strict';

const listItems = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function convertToNumber(string) {
  const salaryNumber = string.replace(/\$/g, '').replace(/,/g, '');

  return +salaryNumber;
}

function sortBySalary(items) {
  items.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );

  return items;
}

function updateList(list, items) {
  list.innerHTML = '';

  const fragment = document.createDocumentFragment();

  items.forEach((item) => fragment.appendChild(item));

  list.appendChild(fragment);
}

sortBySalary(listItems);
updateList(employeesList, listItems);
