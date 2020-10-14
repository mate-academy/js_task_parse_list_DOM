'use strict';

const listOfEmployees = document.querySelector('ul');
const parsedListOfEmployees = [ ...listOfEmployees.children ];

function strToNumber(string) {
  return string.replace(/,|\$/g, '');
}

function sortList(list) {
  return list
    .sort((employeeA, employeeB) => (
      strToNumber(employeeB.dataset.salary)
      - strToNumber(employeeA.dataset.salary)
    ));
}

function getEmployees(fixedList) {
  fixedList.forEach(item => item.parentNode.appendChild(item));
}

const sortedList = sortList(parsedListOfEmployees);

getEmployees(sortedList);
