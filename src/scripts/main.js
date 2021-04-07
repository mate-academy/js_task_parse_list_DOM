'use strict';

function convertSalary(item) {
  return parseInt(item.dataset.salary.replace('$', '').replace(',', ''));
}

function compare(a, b) {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
}

function sortList() {
  const list = document.querySelectorAll('li');

  return [...list].sort((a, b) => compare(convertSalary(a), convertSalary(b)));
}

function getEmployees() {
  const list = sortList();

  return list.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

getEmployees();
// console.log(getEmployees());
