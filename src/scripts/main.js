'use strict';

function convertSalary(item) {
  return parseInt(item.dataset.salary.replace('$', '').replace(',', ''));
}

function compare(item1A, itemB) {
  return convertSalary(itemB) - convertSalary(item1A);
}

function sortList(list) {
  [...list.children].sort((a, b) => compare(a, b))
    .forEach(node => list.appendChild(node));
}

function getEmployees(list) {
  return [...list.children].map(item => {
    const dt = item.dataset;

    return {
      name: item.innerText,
      position: dt.position,
      salary: dt.salary,
      age: dt.age,
    };
  });
}

const listOfEmpl = document.querySelector('ul');

sortList(listOfEmpl);
getEmployees(listOfEmpl);
