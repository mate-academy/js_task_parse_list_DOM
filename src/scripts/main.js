'use strict';

// write code here

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  const sortedEmployees = [];

  for (let i = 0; i < list.children.length; i++) {
    list.children[i].dataset.salary = +list.children[i].dataset.salary
      .replace('$', '')
      .replace(',', '');

    sortedEmployees.push(list.children[i]);
  }

  sortedEmployees.sort((emloyeeA, employeeB) =>
    employeeB.dataset.salary - emloyeeA.dataset.salary);

  for (let i = 0; i < sortedEmployees.length; ++i) {
    list.appendChild(sortedEmployees[i]);
  }
};

sortList(listOfEmployees);
