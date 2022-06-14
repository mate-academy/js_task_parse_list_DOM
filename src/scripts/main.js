'use strict';

const initialList = [...document.querySelectorAll('li')];

const sortList = (list) => {
  const sortedList = list.sort((person1, person2) =>
    toNumber(person2) - toNumber(person1));

  document.querySelector('ul').append(...sortedList);
};

const toNumber = (numStr) => {
  return Number(numStr.dataset.salary.replace('$', '').replace(',', ''));
};

const getEmployees = (list) => {
  return list.map(person => {
    const employeeObj = new Employee(person);

    return employeeObj;
  });
};

class Employee {
  constructor(person) {
    this.name = person.innerText;
    this.position = person.dataset.position;
    this.salary = person.dataset.salary;
    this.age = person.dataset.age;
  }
}

sortList(initialList);
getEmployees(initialList);
