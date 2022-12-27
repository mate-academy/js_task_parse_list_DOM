'use strict';

const fullList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertToNum(salary) {
  return +(salary.split(',').join('').slice(1));
}

function sortList([...list]) {
  const sorted = list.sort((a, b) => (
    convertToNum(b.dataset.salary)
    - convertToNum(a.dataset.salary)));

  fullList.append(...sorted);
}

function getEmployees([...list]) {
  const resultArr = [];

  list.forEach(p => {
    resultArr.push({
      name: p.innerText,
      position: p.dataset.position,
      salary: p.dataset.salary,
      age: p.dataset.age,
    });
  });

  return resultArr;
}

sortList(employees);
getEmployees(employees);
