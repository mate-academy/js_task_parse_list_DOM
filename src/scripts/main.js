'use strict';

// write code here

const array = [...document.querySelectorAll('li')];
const element = document.querySelector('ul');

function sortList(list, callback) {
  list.sort((a, b) => callback(b.dataset.salary) - callback(a.dataset.salary));

  return element.append(...list);
};

function stringToNumber(str) {
  return +str.replace(/[^0-9]/g, '');
}

function getEmployees(list) {
  return list.map(employee => (
    {
      name: employee.innerText,
      ...employee.dataset,
    }
  ));
}

sortList(array, stringToNumber);
getEmployees(array);
