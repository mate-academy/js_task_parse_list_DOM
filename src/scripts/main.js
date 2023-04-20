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
  const result = [];

  arr.forEach((el) => {
    result.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  });

  return result;
}

const list = document.querySelector('UL');
const employees = [...document.getElementsByTagName('li')];

employees.sort((a, b) => {
  if (getNumberFromSalary(a) - getNumberFromSalary(b) > 0) {
    return -1;
  }
});

employees.forEach((el) => list.append(el));

// eslint-disable-next-line no-unused-vars
const employeesObjectsList = getEmployees(employees);
