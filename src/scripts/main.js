'use strict';

function getEmployees() {
  const listOfEmployees = [...document.querySelectorAll('li')];
  const formattedListOfEmployees = listOfEmployees.map((person) => {
    const employee = {};

    employee.name = person.innerText;
    employee.position = person.dataset.position;
    employee.salary = person.dataset.salary;
    employee.age = person.dataset.age;

    return employee;
  });

  return formattedListOfEmployees;
}

function sortList(listing) {
  const listOfEmployees = listing.sort((a, b) =>
    convertToMoney(b.dataset.salary) - convertToMoney(a.dataset.salary));
  const text = document.querySelector('ul');

  text.append(...listOfEmployees);

  return listOfEmployees;
}

function convertToMoney(str) {
  let sum = str;

  while (sum.indexOf(',') > -1) {
    sum = sum.replace(',', '');
  }

  while (sum.indexOf('$') > -1) {
    sum = sum.replace('$', '');
  }

  return parseInt(sum);
}

const list = [...document.querySelectorAll('li')];

sortList(list);
getEmployees(list);
