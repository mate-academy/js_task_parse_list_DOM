'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function convertToNumber(salary) {
  return Number(salary.replace('$', '').split(',').join(''));
}

function sortList(list) {
  list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));
  listOfEmployees.append(...list);
};

function getEmployees(list) {
  return list.map(employee => (
    {
      name: employee.innerText,
      ...employee.dataset,
    }
  ));
};

sortList(employees);
getEmployees(employees);
