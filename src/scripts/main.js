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

/* function getEmployees() {
  const listOfEmployees = [...document.querySelectorAll('li')];
  const formattedListOfEmployees = [];

  for (let i = 0; i < listOfEmployees.length; i++) {
    const employee = {};

    employee.name = listOfEmployees[i].innerText;
    employee.position = listOfEmployees[i].dataset.position;
    employee.salary = listOfEmployees[i].dataset.salary;
    employee.age = listOfEmployees[i].dataset.age;

    formattedListOfEmployees.push(employee);
  }

  return formattedListOfEmployees;
} */

/* function sortList() {
  const listOfEmployees = getEmployees().sort((a, b) =>
    convertToMoney(b.salary) - convertToMoney(a.salary));

  for (let i = 0; i < listOfEmployees.length; i++) {
    document.querySelectorAll(
      'li'
    )[i].innerText = listOfEmployees[i].name;

    document.querySelectorAll(
      'li'
    )[i].dataset.age = listOfEmployees[i].age;

    document.querySelectorAll(
      'li'
    )[i].dataset.position = listOfEmployees[i].position;

    document.querySelectorAll(
      'li'
    )[i].dataset.salary = listOfEmployees[i].salary;
  }

  return listOfEmployees;
} */

function sortList() {
  const listOfEmployees = getEmployees().sort((a, b) =>
    convertToMoney(b.salary) - convertToMoney(a.salary));

  return listOfEmployees.forEach((person, i) => {
    document.querySelectorAll(
      'li'
    )[i].innerText = person.name;

    document.querySelectorAll(
      'li'
    )[i].dataset.age = person.age;

    document.querySelectorAll(
      'li'
    )[i].dataset.position = person.position;

    document.querySelectorAll(
      'li'
    )[i].dataset.salary = person.salary;
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
