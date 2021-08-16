'use strict';

function sortList(array) {
  const sortedArray = [...array].sort((employeeA, employeeB) =>
    convertToNumber(employeeB.dataset.salary)
    - convertToNumber(employeeA.dataset.salary));

  const list = document.querySelector('ul');

  for (const employee of sortedArray) {
    list.append(employee);
  }
}

function getEmployees(list) {
  return [...list].map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

function convertToNumber(item) {
  const result = +item.slice(1).split(',').join('');

  return result;
}

const listOfEmployees = document.querySelectorAll('li');

getEmployees(listOfEmployees);

sortList(listOfEmployees);
