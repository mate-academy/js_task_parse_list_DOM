'use strict';

const getList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const numA = toNumber(a.dataset.salary);
    const numB = toNumber(b.dataset.salary);

    return numB - numA;
  });
}

function toNumber(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result += str[i];
    }
  }

  return +result;
}

function getEmployees(list) {
  const employeesArr = [];

  for (const employee of list) {
    const newObj = {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    employeesArr.push(newObj);
  }

  return employeesArr;
}

getEmployees(getList);

sortList(getList);

ul.replaceWith(...getList);
