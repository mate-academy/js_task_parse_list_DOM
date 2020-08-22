'use strict';

const ul = document.querySelector('ul');

const li = document.querySelectorAll('li');

const list = [...li];

function sortList(listToSort) {
  function toNumber(value) {
    return Number(value.dataset.salary
      .replace(/\$/g, '')
      .split(',')
      .join(''));
  }

  listToSort.sort((a, b) => {
    const first = toNumber(a);

    const second = toNumber(b);

    return first - second;
  });

  listToSort.forEach(element => ul.children[0].before(element));
}

function getEmployees(listToObject) {
  const employeesArray = [];

  listToObject.forEach(element => {
    const employee = {};

    employee.name = element.innerText;

    employee.position = element.dataset.position;

    employee.salary = element.dataset.salary;

    employee.age = element.dataset.age;

    employeesArray.push(employee);
  });

  return employeesArray;
}

sortList(list);
getEmployees(list);
