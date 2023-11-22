'use strict';

function sortList(list) {
  const arrayFromList = [].slice.call(list, 0);

  arrayFromList
    .sort((a, b) => getSalaryNumber(b) - getSalaryNumber(a))
    .forEach(function(node) {
      node.parentNode.append(node);
    });
}

function getSalaryNumber(salaryReceiver) {
  return Number(salaryReceiver.dataset.salary.replace(/\D+/g, ''));
}

class Employee {
  constructor(person) {
    this.name = person.innerText;
    this.position = person.dataset.position;
    this.salary = person.dataset.salary;
    this.age = person.dataset.age;
  }
}

function getEmployees(list) {
  const employeesArray = [];

  list.forEach(el => {
    employeesArray.push(new Employee(el));
  });

  return employeesArray;
}

const employeesList = document.querySelectorAll('li');

sortList(employeesList);
getEmployees(employeesList);
