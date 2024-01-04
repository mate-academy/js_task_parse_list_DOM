'use strict';

const listItems = document.querySelectorAll('li');
const listContainer = document.querySelector('ul');

function convertToNumber(string) {
  return parseInt(string.slice(1).replaceAll(',', ''));
}

function sortList(list) {
  const listArray = Array.from(list);

  listArray
    .sort((a, b) => convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary));

  listContainer.innerHTML = '';

  listArray.forEach(listItem => {
    listContainer.appendChild(listItem);
  });
}

function getEmployees(list) {
  const arrayFromList = Array.from(list);
  const formattedArray = [];

  arrayFromList
    .sort((a, b) => convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary));

  arrayFromList.forEach(listItem => {
    const employee = {};

    employee.name = listItem.textContent.trim();
    employee.position = listItem.dataset.position;
    employee.salary = listItem.dataset.salary;
    employee.age = listItem.dataset.age;

    formattedArray.push(employee);
  });

  return formattedArray;
}

sortList(listItems);
getEmployees(listItems);
