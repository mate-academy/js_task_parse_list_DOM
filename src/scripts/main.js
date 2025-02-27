'use strict';

const CURRENCY_REGEX = /[^0-9.-]+/g;

const listElement = document.getElementsByTagName('ul')[0];
const employees = [...listElement.children];

sortList(employees);
getEmployees(employees);

function convertToNumber(numberString) {
  return Number(numberString.replace(CURRENCY_REGEX, ''));
}

function sortList(arrayList) {
  return arrayList
    .sort((empA, empB) => {
      const salaryA = convertToNumber(empA.dataset.salary);
      const salaryB = convertToNumber(empB.dataset.salary);

      return salaryB - salaryA;
    })
    .forEach((listItem) => listElement.appendChild(listItem));
}

function getEmployees(arrayList) {
  return arrayList.map((listItem) => ({
    name: listItem.innerHTML.trim(),
    age: convertToNumber(listItem.dataset.age),
    salary: convertToNumber(listItem.dataset.salary),
    position: listItem.dataset.position,
  }));
}
