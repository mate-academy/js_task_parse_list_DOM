'use strict';

const listEmployees = document.querySelector('ul');

class Employee {
  constructor(fullname, position, salary, age) {
    this.name = fullname;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function getNumber(value) {
  return Number(value.slice(1).split(',').join(''));
}

function sortList(list) {
  const employee = [...list.children];

  const sortEmployees = employee.sort((a, b) => getNumber(b.dataset.salary)
  - getNumber(a.dataset.salary));

  list.remove();

  const body = document.querySelector('body');
  const newList = document.createElement('ul');

  body.append(newList);

  for (const person of sortEmployees) {
    const item = document.createElement('li');

    item.dataset.position = person.dataset.position;
    item.dataset.salary = person.dataset.salary;
    item.dataset.age = person.dataset.age;
    item.textContent = person.innerText;
    newList.append(item);
  }

  return newList;
}

function getEmployees(list) {
  const peoples = [...list.children];
  const employees = [];

  for (const person of peoples) {
    const employee = new Employee(person.innerText, person.dataset.position,
      person.dataset.salary, person.dataset.age);

    employees.push(employee);
  }

  return employees;
};

const sortedList = sortList(listEmployees);

getEmployees(sortedList);
