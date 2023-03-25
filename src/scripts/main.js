'use strict';

const allEmployees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function sortList(list) {
  return employeesList.append(...list
    .sort((a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)));
};

function getEmployees(list) {
  return list.map(obj => {
    return {
      name: obj.innerText,
      ...obj.dataset,
    };
  });
};

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
};

sortList(allEmployees);
getEmployees(allEmployees);
