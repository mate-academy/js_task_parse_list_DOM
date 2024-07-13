'use strict';

const toNum = (str) => {
  return +str.dataset.salary.slice(1).replace(',', '');
};

function sortList(listOfEmployees) {
  const ul = document.querySelector('ul');

  listOfEmployees
    .sort((el1, el2) => toNum(el2) - toNum(el1))
    .forEach((el) => ul.appendChild(el));
}

function getEmployees(listOfEmployees) {
  const employees = [];

  listOfEmployees.forEach((empl) => {
    const employee = {
      name: empl.textContent,
      position: empl.dataset.position,
      salary: empl.dataset.salary,
      age: empl.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

const list = [...document.querySelectorAll('li')];

sortList(list);
getEmployees(list);
