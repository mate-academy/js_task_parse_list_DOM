'use strict';

const employees = document.querySelectorAll('li');

function convertSalarytoNum(str) {
  return +(str.split(',').join('').slice(1));
}

function sortList([...list]) {
  return list.sort((a, b) => (
    convertSalarytoNum(b.dataset.salary)
    - convertSalarytoNum(a.dataset.salary)));
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

getEmployees(employees);
sortList(employees);
