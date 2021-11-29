'use strict';

class Employee {
  constructor(employeeName, position, salary, age) {
    this.name = employeeName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function stringToNumber(string) {
  const resultNumber = string.split(',').join('').replace('$', '');

  return resultNumber;
}

const nodeListofLi = document.querySelectorAll('li');
const nodelistOfUl = document.querySelector('ul');

function getEmployees(list) {
  const arrayOfEmployees = [];

  for (const value of list) {
    const salaryNumber = value.dataset.salary;

    arrayOfEmployees.push(new Employee(value.innerText, value.dataset.position,
      stringToNumber(salaryNumber), value.dataset.age));
  }

  return arrayOfEmployees;
}

function sortList(list) {
  const arrayOfEmployees = [];

  for (const value of list) {
    arrayOfEmployees.push(value);
  }

  arrayOfEmployees.sort((a, b) =>
    stringToNumber(b.dataset.salary) - stringToNumber(a.dataset.salary));

  arrayOfEmployees.map(value => nodelistOfUl.append(value));
}

sortList(nodeListofLi);
getEmployees(nodeListofLi);
