'use strict';

const list = document.querySelector('ul');
const items = [...list.children];

function convertToNumber(string) {
  return +string.replace(/[^0-9]/gm, '');
}

function sortList(listForSorting) {
  return listForSorting
    .sort((item1, item2) => {
      return (
        convertToNumber(item2.dataset.salary)
        - convertToNumber(item1.dataset.salary)
      );
    })
    .forEach((item) => list.append(item));
}

function getEmployees(employeesArr) {
  return employeesArr.map((item) => {
    return {
      name: `${item.innerText}`,
      position: `${item.dataset.position}`,
      salary: `${item.dataset.salary}`,
      age: `${item.dataset.age}`,
    };
  });
}

sortList(items);
getEmployees(items);
