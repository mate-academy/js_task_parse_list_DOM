'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('[data-salary]')];

function styler(str) {
  return str.split('').filter(x => '1234567890'.includes(x)).join('');
}

function sortList(arr) {
  const sorted = arr.sort((x, y) => {
    return styler(y.dataset.salary) - styler(x.dataset.salary);
  });

  sorted.map(x => list.append(x));
}

function getEmployees(arr) {
  class Person {
    constructor(personName, position, salary, age) {
      this.name = personName;
      this.position = position;
      this.salary = salary;
      this.age = age;
    }
  };

  return arr.map(el => {
    const elName = el.textContent.trim();
    const elPosition = el.dataset.position;
    const elSalary = el.dataset.salary;
    const elAge = el.dataset.age;

    return new Person(elName, elPosition, elSalary, elAge);
  });
}

sortList(employees);
getEmployees(employees);
