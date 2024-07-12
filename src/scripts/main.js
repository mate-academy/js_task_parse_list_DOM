'use strict';

const stringToNumber = (str) => +str.dataset.salary.slice(1).replace(',', '');

function sortList(listOfEmployees) {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  listOfEmployees.sort((el1, el2) => {
    return stringToNumber(el2) - stringToNumber(el1);
  });

  listOfEmployees.forEach((el) => ul.appendChild(el));
}

function getEmployees(listOfEmployees) {
  const employees = [];

  listOfEmployees.forEach((item) => {
    const employee = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

const list = [...document.querySelectorAll('li')];

sortList(list);

getEmployees(list);
