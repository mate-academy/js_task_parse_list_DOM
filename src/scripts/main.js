'use strict';

const ulList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');
const listArray = [...listItems];

function getSalary(salary) {
  return parseInt(salary.replace('$', '').replaceAll(',', ''));
}

function sortList(array) {
  const sortedList = array.sort((a, b) =>
    getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  sortedList.forEach(element => {
    ulList.append(element);
  });
}

class Employee {
  constructor(employee, position, salary, age) {
    this.name = employee;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function getEmployees(array) {
  array.map(listElement => {
    const employee = listElement.textContent;
    const { position, salary, age } = listElement.dataset;

    return new Employee(employee, position, salary, age);
  });
}

sortList(listArray);
getEmployees(listArray);
