'use strict';

const listItem = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function transformationNumber(element) {
  const array = element.dataset.salary.slice(1).split(',');

  return +(array[0] + array[1]);
}
// this function hellper-----------------------------

function sortList(xxx) {
  xxx.sort((x, y) => transformationNumber(y) - transformationNumber(x));

  for (let i = 0; i < listItem.length; i++) {
    list.append(listItem[i]);
  }
}

function getEmployees(x) {
  return x.map(oneEmp => {
    return {
      name: oneEmp.innerText,
      position: oneEmp.dataset.position,
      salary: oneEmp.dataset.salary,
      age: oneEmp.dataset.age,
    };
  });
}

sortList(listItem);
getEmployees(listItem);
