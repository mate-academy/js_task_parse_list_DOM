'use strict';

const ul = document.querySelector('ul');
const liElements = [...document.querySelectorAll('li')];

function sortList(list, property) {
  return list.sort(
    (li1, li2) =>
      strToNumber(li2.dataset[property]) - strToNumber(li1.dataset[property]),
  );
}

function strToNumber(str) {
  return Number(str.replaceAll(/[$,]/g, ''));
}

function getEmployees(list) {
  const employees = [];

  for (const li of list) {
    const employee = {};

    employee.name = li.textContent.trim();

    for (const key in li.dataset) {
      employee[key] = li.dataset[key];
    }

    employees.push(employee);
  }

  return employees;
}

sortList(liElements, 'salary');
liElements.forEach((li) => ul.append(li));
getEmployees(liElements);
