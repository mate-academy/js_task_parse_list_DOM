'use strict';

const listOFWorkers = [...document.querySelectorAll('li')];

const newList = document.querySelector('ul');

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(list) {
  list.sort((a, b) =>
    convertToNumber(b.dataset.salary)
      - convertToNumber(a.dataset.salary));
  list.forEach((person) => newList.append(person));

  return newList;
}

function getEmployees(list) {
  const employees = [...list];
  const newRate = employees.map(employee => (
    {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }
  ));

  return newRate;
}

sortList(listOFWorkers);

getEmployees(listOFWorkers);
