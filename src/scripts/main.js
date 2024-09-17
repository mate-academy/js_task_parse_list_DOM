'use strict';

function getNumberFromSalary(item) {
  const result = +[...item.dataset.salary].map((char) => {
    if (isNaN(char)) {
      return;
    }

    return char;
  }).join('');

  return result;
}

function getEmployees(arr) {
  return arr.map((el) => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

const list = document.querySelector('UL');
const employees = [...document.getElementsByTagName('li')];

employees.sort((a, b) => {
  return getNumberFromSalary(a) - getNumberFromSalary(b);
}).reverse();

employees.forEach((el) => list.append(el));
getEmployees(employees);
