'use strict';

function sortList(array) {
  const sortedArray = array.sort((employeeA, employeeB) =>
    convertToNumber(employeeB.salary) - convertToNumber(employeeA.salary));

  for (let i = 0; i < listOfEmployees.length; i++) {
    listOfEmployees[i].innerText = sortedArray[i].name;
    listOfEmployees[i].dataset.position = sortedArray[i].position;
    listOfEmployees[i].dataset.salary = sortedArray[i].salary;
    listOfEmployees[i].dataset.age = sortedArray[i].age;
  }
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    const employee = {};

    employee.name = list[i].innerText.trim();
    employee.position = list[i].dataset.position;
    employee.salary = list[i].dataset.salary;
    employee.age = list[i].dataset.age;

    employees.push(employee);
  }

  return employees;
}

function convertToNumber(item) {
  const result = +item.slice(1).split(',').join('');

  return result;
}

const listOfEmployees = document.querySelectorAll('li');

const arrayOfEmployees = getEmployees(listOfEmployees);

sortList(arrayOfEmployees);
