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

function sortList() {
  const listOfEmployees = getEmployees().sort((a, b) =>
    convertToMoney(b.salary) - convertToMoney(a.salary));
  const fieldsForEditing = document.querySelectorAll('li');

  return listOfEmployees.forEach((person, i) => {
    fieldsForEditing[i].innerText = person.name;
    fieldsForEditing[i].dataset.age = person.age;
    fieldsForEditing[i].dataset.position = person.position;
    fieldsForEditing[i].dataset.salary = person.salary;
  });
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

sortList();
getEmployees();
