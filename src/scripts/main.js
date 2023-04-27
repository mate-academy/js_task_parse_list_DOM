'use strict';

function camparator(a, b) {
  if (a.dataset.salary > b.dataset.salary) {
    return -1;
  } else if (a.dataset.salary < b.dataset.salary) {
    return 1;
  }

  return 0;
}

const salary = document.querySelectorAll(['[data-salary]']);
const workersArray = [...salary];

function sortList() {
  const sorted = workersArray.sort(camparator);

  sorted.forEach(item => document.querySelector('ul').appendChild(item));

  const list = document.querySelector('ul');
  const firstLi = document.querySelector('li');

  list.append(firstLi);
}

function getEmployees() {
  const employeesArr = [];

  for (const worker of workersArray) {
    const employeesObject = {};

    employeesObject.name = worker.innerText;
    employeesObject.position = worker.dataset.position;
    employeesObject.salary = worker.dataset.salary;
    employeesObject.age = worker.dataset.age;

    employeesArr.push(employeesObject);
  }

  return employeesArr;
}

sortList();
getEmployees();
