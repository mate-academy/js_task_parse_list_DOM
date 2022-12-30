'use strict';

const listOFWorkers = [...document.querySelectorAll('li')];

const newList = document.querySelector('ul');

function convertToNumber(string) {
  return +string;
}

function sortList(list) {
  list.sort((a, b) =>
    convertToNumber(b.dataset.salary.slice(1).split(',').join(''))
      - convertToNumber(a.dataset.salary.slice(1).split(',').join('')));
  list.forEach((person) => newList.append(person));

  return newList;
}

function getEmployees(list) {
  const employees = [...list];
  const newEmployeeList = [];

  for (const worker of employees) {
    newEmployeeList.push({
      name: worker.innerText,
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    });
  }

  return newEmployeeList;
}

sortList(listOFWorkers);

getEmployees(listOFWorkers);
