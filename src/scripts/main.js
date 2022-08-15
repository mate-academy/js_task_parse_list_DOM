'use strict';

const list = document.querySelectorAll('li');
const listArray = [...list];
const ulList = document.querySelector('ul');

function sortList(array) {
  const sorted = array.sort((a, b) =>
    getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  sorted.forEach(item => ulList.append(item));
}

class Employee {
  constructor(employee, position, salary, age) {
    this.name = employee;
    this.position = position;
    this.salary = getSalary(salary);
    this.age = age;
  }
}

function getSalary(value) {
  return parseInt(value.replace('$', '').replaceAll(',', ''));
};

function getEmployees(array) {
  array.map(person => {
    const employee = person.innerHTML;
    const { position, salary, age } = person.dataset;

    return new Employee(employee, position, salary, age);
  });
}

sortList(listArray);
getEmployees(listArray);
