'use strict';

const ulElement = document.querySelector('ul');
const employees = document.querySelectorAll('li');
const sortedEmployees = [...employees];

const parseInteger = (num) => +num.replace(/[$,]/g, '');

function sortList(list) {
  list.sort((a, b) =>
    parseInteger(b.dataset.salary)
  - parseInteger(a.dataset.salary));
}

function renderEmployeeList() {
  ulElement.innerHTML = '';

  for (const employee of sortedEmployees) {
    ulElement.insertAdjacentHTML('beforeend', employee.outerHTML);
  }
}

sortList(sortedEmployees);
renderEmployeeList();
