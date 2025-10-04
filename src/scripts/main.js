/* eslint-disable prettier/prettier */
'use strict';

// write code here
const list = document.querySelector('ul');

function convertToNumber(string) {
  return Number(string.slice(1).split(',').join(''));
}

function sortList(currList) {
  const listElements = [...currList.querySelectorAll('li')];

  listElements.sort(
    (item1, item2) =>
      convertToNumber(item2.dataset.salary) -
      convertToNumber(item1.dataset.salary),
  );

  currList.innerHTML = '';

  listElements.forEach((item) => currList.appendChild(item));
}

function getEmployees(currList) {
  const listElements = [...currList.querySelectorAll('li')];
  const employeesList = [];

  listElements.forEach((item) =>
    employeesList.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: Number(item.dataset.age),
    }));

  return employeesList;
}

sortList(list);
getEmployees(list);
