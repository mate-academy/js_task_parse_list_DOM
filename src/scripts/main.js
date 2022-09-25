'use strict';

// const elements = document.body.querySelectorAll('li');
const elements = [...document.querySelectorAll('li')];

function convertToNumber(inputString) {
  return +inputString.replace(/\D/g, '');
}

function sortList(list) {
  const employeeList = document.querySelector('ul');

  const sortedList = [...list].sort((prev, next) =>
    convertToNumber(next.dataset.salary)
    - convertToNumber(prev.dataset.salary));

  employeeList.append(...sortedList);
};

function getEmployees(list) {
  return [...list].map((employee) => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
};

sortList(elements);
getEmployees(elements);
