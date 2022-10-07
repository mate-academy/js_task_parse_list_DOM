'use strict';

const employeeList = [...document.querySelectorAll('li')];
const mainList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => (+b.dataset.salary.slice(1)
    .split(',').join('')) - (+a.dataset.salary.slice(1).split(',').join('')));

  for (const item of list) {
    mainList.append(item);
  }
}

function getEmployees(list) {
  const objectArray = [];
  const copyList = [...list];

  for (const item of copyList) {
    objectArray.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return objectArray;
}

sortList(employeeList);
getEmployees(employeeList);
